import "./build.mjs";
import { createServer } from "node:http";
import { DatabaseSync } from "node:sqlite";
import { readdir, readFile } from "node:fs/promises";
import { parseArgs } from "node:util";

const { default: worker } = await import("../dist/server/index.js");

const sqlite = new DatabaseSync(process.env.SINDBAD_DB || ":memory:");
sqlite.exec("PRAGMA foreign_keys = ON");
const migrations = new URL("../drizzle/", import.meta.url);
sqlite.exec("CREATE TABLE IF NOT EXISTS local_migrations (name TEXT PRIMARY KEY)");
const applied = sqlite.prepare("SELECT 1 FROM local_migrations WHERE name = ?");
const record = sqlite.prepare("INSERT INTO local_migrations VALUES (?)");
for (const file of (await readdir(migrations)).filter(name => name.endsWith(".sql")).sort()) {
  if (applied.get(file)) continue;
  const previousLocalSchema = file === "0000_sindbad.sql" &&
    sqlite.prepare("SELECT 1 FROM sqlite_master WHERE name = 'reservations'").get();
  sqlite.exec("BEGIN");
  try {
    if (!previousLocalSchema) sqlite.exec(await readFile(new URL(file, migrations), "utf8"));
    record.run(file);
    sqlite.exec("COMMIT");
  } catch (error) {
    sqlite.exec("ROLLBACK");
    throw error;
  }
}

const db = {
  prepare(sql) {
    const statement = sqlite.prepare(sql);
    return {
      bind(...values) {
        return {
          run: () => ({ meta: statement.run(...values) }),
          first: () => statement.get(...values),
          all: () => ({ results: statement.all(...values) })
        };
      },
      all: () => ({ results: statement.all() })
    };
  }
};

const env = {
  RESTAURANT_TABLES: '{"1":2,"2":2,"3":4,"4":4,"5":6,"6":8}',
  ...process.env, DB: db, OWNER_PRIVATE_ADMIN: "1"
};
const { values } = parseArgs({
  options: { host: { type: "string" }, port: { type: "string" }, strictPort: { type: "boolean" } }
});
const port = Number(values.port || process.env.PORT || 3000);
const host = values.host || "127.0.0.1";
const server = createServer(async (incoming, outgoing) => {
  const url = new URL(incoming.url, "http://" + incoming.headers.host);
  const headers = new Headers(incoming.headers);
  headers.set("oai-authenticated-user-id", "local-owner");
  const init = { method: incoming.method, headers };
  if (!["GET", "HEAD"].includes(incoming.method)) {
    init.body = incoming;
    init.duplex = "half";
  }
  const response = await worker.fetch(new Request(url, init), env);
  outgoing.writeHead(response.status, Object.fromEntries(response.headers));
  outgoing.end(Buffer.from(await response.arrayBuffer()));
});
server.listen(port, host, () => console.log("Local: http://localhost:" + port));
