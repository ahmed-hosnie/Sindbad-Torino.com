const { SINDBAD_SITE_URL, BIRTHDAY_JOB_SECRET, SINDBAD_SITE_SERVICE_TOKEN } = process.env;
if (!SINDBAD_SITE_URL || !BIRTHDAY_JOB_SECRET) {
  console.error("Set SINDBAD_SITE_URL and BIRTHDAY_JOB_SECRET before running the birthday job.");
  process.exit(1);
}

try {
  const url = new URL("/api/birthday-run", SINDBAD_SITE_URL);
  if (url.protocol !== "https:" && !["localhost", "127.0.0.1"].includes(url.hostname)) {
    throw new Error("Use an HTTPS Site URL.");
  }
  const headers = { Authorization: "Bearer " + BIRTHDAY_JOB_SECRET };
  if (SINDBAD_SITE_SERVICE_TOKEN) {
    headers["OAI-Sites-Authorization"] = "Bearer " + SINDBAD_SITE_SERVICE_TOKEN;
  }
  const response = await fetch(url, {
    method: "POST", headers, redirect: "error", signal: AbortSignal.timeout(240_000)
  });
  if (!response.ok) throw new Error("Birthday job returned HTTP " + response.status);
  const { sent, failed } = await response.json();
  console.log(JSON.stringify({ sent, failed }));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
