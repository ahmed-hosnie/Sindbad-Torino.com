import { mkdir, readFile, writeFile, copyFile, readdir } from "node:fs/promises";

const platformDir = new URL("../public/assets/platforms/", import.meta.url);
const platformTypes = { svg: "image/svg+xml", png: "image/png", webp: "image/webp" };
const platformAssets = (await readdir(platformDir).catch(() => []))
  .filter(file => file.split(".").pop() in platformTypes)
  .sort()
  .map(file => ["assets/platforms/" + file, platformTypes[file.split(".").pop()], true]);

const assets = [
  ["index.html", "text/html; charset=utf-8"],
  ["styles.css", "text/css; charset=utf-8"],
  ["languages.js", "text/javascript; charset=utf-8"],
  ["menu-data.js", "text/javascript; charset=utf-8"],
  ["menu.js", "text/javascript; charset=utf-8"],
  ["forms.js", "text/javascript; charset=utf-8"],
  ["assets/brand-mark.webp", "image/webp", true],
  ["assets/torino-art.webp", "image/webp", true],
  ["assets/menu-sindbad.pdf", "application/pdf", true],
  ["assets/restaurant-hero.webp", "image/webp", true],
  ["assets/calzone-illustration.webp", "image/webp", true],
  ...platformAssets,
  ...(await readdir(new URL("../public/assets/dishes/", import.meta.url)))
    .filter(file => file.endsWith(".webp"))
    .sort()
    .map(file => ["assets/dishes/" + file, "image/webp", true])
];

const entries = await Promise.all(assets.map(async ([path, type, binary = false]) => {
  const content = await readFile(new URL("../public/" + path, import.meta.url));
  return ["/" + path, [type, content.toString(binary ? "base64" : "utf8"), binary]];
}));

const dist = new URL("../dist/", import.meta.url);
await mkdir(new URL("server/", dist), { recursive: true });
await mkdir(new URL(".openai/", dist), { recursive: true });
const worker = await readFile(new URL("../worker/index.js", import.meta.url), "utf8");
const bundle = worker.replace('import { siteAssets } from "./assets.js";', "const siteAssets = " + JSON.stringify(Object.fromEntries(entries)) + ";");
await writeFile(new URL("server/index.js", dist), bundle);
await copyFile(new URL("../.openai/hosting.json", import.meta.url), new URL(".openai/hosting.json", dist));
