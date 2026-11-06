import { siteAssets } from "./assets.js";

const dateFormatter = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "Europe/Rome", year: "numeric", month: "2-digit", day: "2-digit"
});
const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Rome", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
});
const timestamp = () => new Date().toISOString();
const randomToken = () => crypto.randomUUID().replaceAll("-", "") + crypto.randomUUID().replaceAll("-", "");
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[character]);

function dateIsValid(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + "T12:00:00Z");
  return !Number.isNaN(+date) && date.toISOString().slice(0, 10) === value;
}

function addDays(date, days) {
  const value = new Date(date + "T12:00:00Z");
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
}

function normalizeContact(raw, internationalOnly = false) {
  const value = raw.trim().toLowerCase();
  if (value.length > 160) return "";
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return value;
  const phone = value.replace(/[\s()-]/g, "");
  if (/^\+[1-9]\d{7,14}$/.test(phone)) return phone;
  return !internationalOnly && /^\d{7,15}$/.test(phone) ? phone : "";
}

function json(code, status = 200) {
  return Response.json({ code }, { status, headers: { "Cache-Control": "no-store" } });
}

function html(title, content, status = 200) {
  return new Response(`<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)} · Sindbad</title><link rel="stylesheet" href="/styles.css"></head><body><main class="page-section shell"><h1>${escapeHtml(title)}</h1>${content}<p><a href="/">Torna al sito</a></p></main></body></html>`, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" }
  });
}

function isAdmin(request, env) {
  const visitor = request.headers.get("oai-authenticated-user-id");
  return Boolean(visitor && (env.ADMIN_USER_ID ? visitor === env.ADMIN_USER_ID : env.OWNER_PRIVATE_ADMIN === "1"));
}

async function readForm(request) {
  if (!request.headers.get("content-type")?.startsWith("application/x-www-form-urlencoded")) return null;
  const reader = request.body?.getReader();
  if (!reader) return null;
  const decoder = new TextDecoder();
  let length = 0;
  let text = "";
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    length += value.length;
    if (length > 6000) {
      await reader.cancel();
      return null;
    }
    text += decoder.decode(value, { stream: true });
  }
  return new URLSearchParams(text + decoder.decode());
}

function restaurantTables(env) {
  try {
    const config = JSON.parse(env.RESTAURANT_TABLES ?? "{}");
    if (!config || typeof config !== "object" || Array.isArray(config)) return [];
    return Object.entries(config)
      .filter(([number, seats]) => /^[1-9]\d{0,3}$/.test(number) && Number.isInteger(seats) && seats >= 1 && seats <= 20)
      .map(([number, seats]) => ({ number: Number(number), seats }));
  } catch {
    return [];
  }
}

function validSlot(slot) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(slot);
}

function reservationDuration(env) {
  const minutes = Number(env.RESERVATION_MINUTES ?? 90);
  return Number.isInteger(minutes) && minutes >= 30 && minutes <= 240 ? minutes : 90;
}

async function availableTables(env, query) {
  const tables = restaurantTables(env);
  const day = query.get("date") ?? "";
  const slot = query.get("time") ?? "";
  if (!day && !slot) return Response.json(tables, { headers: { "Cache-Control": "no-store" } });
  if (!dateIsValid(day) || !validSlot(slot)) return json("invalid", 400);
  const start = day + " " + slot;
  const { results } = await env.DB.prepare(`SELECT DISTINCT table_number FROM reservations
    WHERE table_number IS NOT NULL AND status IN ('pending', 'confirmed')
      AND day BETWEEN ? AND ?
      AND datetime(day || ' ' || slot) < datetime(?, '+' || ? || ' minutes')
      AND datetime(day || ' ' || slot, '+' || duration_minutes || ' minutes') > datetime(?)`)
    .bind(addDays(day, -1), addDays(day, 1), start, reservationDuration(env), start).all();
  const occupied = new Set(results.map(row => row.table_number));
  return Response.json(tables.filter(table => !occupied.has(table.number)), { headers: { "Cache-Control": "no-store" } });
}

async function saveReservation(env, form) {
  const name = (form.get("name") ?? "").trim();
  const phone = normalizeContact(form.get("phone") ?? "", true);
  const day = form.get("date") ?? "";
  const slot = form.get("time") ?? "";
  const guests = Number(form.get("guests"));
  const tableNumber = Number(form.get("table"));
  const table = restaurantTables(env).find(entry => entry.number === tableNumber);
  const now = new Date();
  const today = dateFormatter.format(now);

  if (!name || name.length > 80 || !phone || phone.includes("@") || !dateIsValid(day) ||
      day < today || day > addDays(today, 180) || !validSlot(slot) ||
      (day === today && slot <= timeFormatter.format(now)) ||
      !table || !Number.isInteger(guests) || guests < 1 || guests > table.seats) {
    return json("invalid", 400);
  }

  const duration = reservationDuration(env);
  const start = day + " " + slot;
  const result = await env.DB.prepare(`INSERT INTO reservations
    (id, name, contact, day, slot, guests, table_number, duration_minutes, created_at)
    SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?
    WHERE NOT EXISTS (
      SELECT 1 FROM reservations WHERE table_number = ? AND status IN ('pending', 'confirmed')
        AND day BETWEEN ? AND ?
        AND datetime(day || ' ' || slot) < datetime(?, '+' || ? || ' minutes')
        AND datetime(day || ' ' || slot, '+' || duration_minutes || ' minutes') > datetime(?)
    )
    ON CONFLICT (contact, day, slot) WHERE status IN ('pending', 'confirmed') DO NOTHING`)
    .bind(crypto.randomUUID(), name, phone, day, slot, guests, tableNumber, duration, timestamp(),
      tableNumber, addDays(day, -1), addDays(day, 1), start, duration, start).run();
  return result.meta.changes ? json("booked", 201) : json("tableTaken", 409);
}

function deliveryChannels(env) {
  return {
    email: Boolean(env.RESEND_API_KEY && env.EMAIL_FROM),
    phone: Boolean(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN && env.TWILIO_FROM)
  };
}

function canSend(env, contact) {
  return deliveryChannels(env)[contact.includes("@") ? "email" : "phone"];
}

async function sendMessage(env, contact, subject, message, idempotencyKey) {
  const email = contact.includes("@");
  const options = email ? {
    headers: { Authorization: "Bearer " + env.RESEND_API_KEY, "Content-Type": "application/json", "Idempotency-Key": idempotencyKey },
    body: JSON.stringify({ from: env.EMAIL_FROM, to: [contact], subject, text: message })
  } : {
    headers: { Authorization: "Basic " + btoa(env.TWILIO_ACCOUNT_SID + ":" + env.TWILIO_AUTH_TOKEN) },
    body: new URLSearchParams({ From: env.TWILIO_FROM, To: contact, Body: message })
  };
  const url = email ? "https://api.resend.com/emails" : "https://api.twilio.com/2010-04-01/Accounts/" + env.TWILIO_ACCOUNT_SID + "/Messages.json";
  const response = await fetch(url, { ...options, method: "POST", signal: AbortSignal.timeout(8000) });
  await response.body?.cancel();
  if (!response.ok) {
    const error = new Error("Delivery service returned " + response.status);
    error.rejectedByProvider = response.status >= 400 && response.status < 500;
    throw error;
  }
}

async function joinBirthday(env, form, origin) {
  const name = (form.get("name") ?? "").trim();
  const email = normalizeContact(form.get("email") ?? "", true);
  const phone = normalizeContact(form.get("phone") ?? "", true);
  const day = Number(form.get("day"));
  const month = Number(form.get("month"));
  const date = "2000-" + String(month).padStart(2, "0") + "-" + String(day).padStart(2, "0");
  if (!name || name.length > 80 || !email.includes("@") || !phone || phone.includes("@") ||
      !dateIsValid(date) || form.get("consent") !== "yes") {
    return json("invalid", 400);
  }
  const channels = deliveryChannels(env);
  const contact = channels.email ? email : phone;
  if (!canSend(env, contact)) return json("unavailable", 503);

  const token = randomToken();
  const consentAt = timestamp();
  const recent = new Date(Date.now() - 5 * 60000).toISOString();
  const result = await env.DB.prepare(`INSERT INTO birthday_members (id, name, contact, email, phone, delivery_contact, birthday_day, birthday_month, token, consent_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT (contact) DO UPDATE SET
    name=excluded.name, email=excluded.email, phone=excluded.phone, delivery_contact=excluded.delivery_contact,
    birthday_day=excluded.birthday_day, birthday_month=excluded.birthday_month,
    token=excluded.token, consent_at=excluded.consent_at, verified_at=NULL, unsubscribed_at=NULL
    WHERE (birthday_members.verified_at IS NULL OR birthday_members.unsubscribed_at IS NOT NULL)
    AND birthday_members.consent_at < ?`)
    .bind(crypto.randomUUID(), name, contact, email, phone, contact, day, month, token, consentAt, recent).run();

  if (result.meta.changes) {
    try {
      await sendMessage(env, contact, "Conferma la tua iscrizione Sindbad", "Conferma l’iscrizione: " + origin + "/compleanno/conferma?k=" + token, "verify-" + token);
    } catch (error) {
      await env.DB.prepare("UPDATE birthday_members SET consent_at = ? WHERE token = ? AND verified_at IS NULL")
        .bind("1970-01-01T00:00:00.000Z", token).run();
      throw error;
    }
  }
  return json("verify", 202);
}

async function handleBirthdayLink(request, env, url, form) {
  const verify = url.pathname.endsWith("/conferma");
  const token = (form ? form.get("token") : url.searchParams.get("k")) ?? "";
  if (!/^[a-f0-9]{64}$/.test(token)) return html("Link non valido", "", 400);

  if (request.method === "GET") {
    const title = verify ? "Conferma iscrizione" : "Annulla iscrizione";
    return html(title, `<form method="post" action="${url.pathname}"><input type="hidden" name="token" value="${token}"><button class="button">${title}</button></form>`);
  }

  const statement = verify
    ? "UPDATE birthday_members SET verified_at=? WHERE token=? AND verified_at IS NULL AND unsubscribed_at IS NULL AND consent_at>=?"
    : "UPDATE birthday_members SET unsubscribed_at=? WHERE token=? AND unsubscribed_at IS NULL";
  const values = verify ? [timestamp(), token, new Date(Date.now() - 2 * 86400000).toISOString()] : [timestamp(), token];
  const result = await env.DB.prepare(statement).bind(...values).run();
  if (!result.meta.changes) return html("Link scaduto o già utilizzato", "", 400);
  return html(verify ? "Iscrizione confermata" : "Iscrizione annullata", "");
}

async function runBirthdayJob(env, origin) {
  const now = Date.now();
  const lease = crypto.randomUUID();
  const lock = await env.DB.prepare(`INSERT INTO birthday_job_lock (id, token, expires_at) VALUES (1, ?, ?)
    ON CONFLICT(id) DO UPDATE SET token=excluded.token, expires_at=excluded.expires_at
    WHERE birthday_job_lock.expires_at < ?`).bind(lease, now + 15 * 60000, now).run();
  if (!lock.meta.changes) return Response.json({ running: true }, { status: 409 });

  let failed = 0;
  try {
    const channels = deliveryChannels(env);
    if (!channels.email && !channels.phone) return Response.json({ configured: false }, { status: 503 });

    const today = dateFormatter.format(new Date(now));
    const [, month, day] = today.split("-").map(Number);
    const { results } = await env.DB.prepare(`SELECT id, contact, delivery_contact, token FROM birthday_members
      WHERE birthday_month=? AND birthday_day=? AND verified_at IS NOT NULL AND unsubscribed_at IS NULL`)
      .bind(month, day).all();
    let sent = 0;

    for (const member of results) {
      const contact = member.delivery_contact ?? member.contact;
      if (!canSend(env, contact)) continue;
      const id = crypto.randomUUID();
      await env.DB.prepare(`INSERT INTO birthday_coupons (id, member_id, birthday, code, discount, expires, benefit)
        VALUES (?, ?, ?, ?, 0, ?, 'birthday-dessert') ON CONFLICT (member_id, birthday) DO NOTHING`)
        .bind(id, member.id, today, "SB-" + id.replaceAll("-", "").slice(0, 12).toUpperCase(), today).run();
      const coupon = await env.DB.prepare(`SELECT id, code FROM birthday_coupons
        WHERE member_id=? AND birthday=? AND benefit='birthday-dessert' AND sent_at IS NULL`)
        .bind(member.id, today).first();
      if (!coupon) continue;

      const claim = await env.DB.prepare(`UPDATE birthday_coupons SET delivery_claimed_at=?
        WHERE id=? AND sent_at IS NULL AND delivery_claimed_at IS NULL
          AND EXISTS (SELECT 1 FROM birthday_members WHERE id=? AND token=? AND unsubscribed_at IS NULL)`)
        .bind(timestamp(), coupon.id, member.id, member.token).run();
      if (!claim.meta.changes) continue;

      const message = [
        "كل سنة وأنت طيب من عائلة سندباد! 🎉 بمناسبة عيد ميلادك، ليك وجبة تحلية مجانية (من اختيارك بين الكنافة أو البسبوسة اللذيذة) عند طلبك القادم اليوم! 🍰✨",
        "Buon compleanno da Sindbad! Oggi, con il tuo prossimo ordine, scegli una kunafa o una basbusa in omaggio.",
        coupon.code,
        "Disiscriviti / إلغاء الاشتراك: " + origin + "/compleanno/annulla?k=" + member.token
      ].join("\n");
      try {
        await sendMessage(env, contact, "Buon compleanno da Sindbad | عيد ميلاد سعيد", message, "dessert-" + coupon.id);
        await env.DB.prepare("UPDATE birthday_coupons SET sent_at=? WHERE id=?").bind(timestamp(), coupon.id).run();
        sent++;
      } catch (error) {
        if (error.rejectedByProvider) {
          await env.DB.prepare("UPDATE birthday_coupons SET delivery_claimed_at=NULL WHERE id=? AND sent_at IS NULL").bind(coupon.id).run();
        }
        failed++;
      }
    }
    return Response.json({ sent, failed }, { status: failed ? 502 : 200 });
  } finally {
    await env.DB.prepare("DELETE FROM birthday_job_lock WHERE id=1 AND token=?").bind(lease).run();
  }
}

async function renderAdmin(env) {
  const { results } = await env.DB.prepare(`SELECT * FROM reservations ORDER BY
    CASE status WHEN 'pending' THEN 0 ELSE 1 END, day DESC, slot DESC LIMIT 150`).all();
  const statusLabels = { pending: "In attesa", confirmed: "Confermata", declined: "Rifiutata" };
  const cards = results.map(row => `<li class="menu-card"><h4>${escapeHtml(row.name)}</h4><p>${escapeHtml(row.day)} · ${escapeHtml(row.slot)} · ${row.guests} persone · Tavolo ${row.table_number ?? "—"}</p><p>${escapeHtml(row.contact)} · ${statusLabels[row.status]}</p>
    <form method="post" action="/admin/reservations"><input type="hidden" name="id" value="${escapeHtml(row.id)}"><div class="hero-actions"><button class="button" name="status" value="confirmed">Conferma</button><button class="button button-secondary" name="status" value="declined">Rifiuta</button></div></form></li>`).join("");
  return html("Gestione Sindbad", `<h2>Richieste di prenotazione</h2><p>Contatta il cliente prima di comunicare la conferma definitiva.</p>
    ${cards ? `<ul class="menu-items">${cards}</ul>` : "<p>Nessuna richiesta.</p>"}
    <h2>Codici compleanno</h2><form class="guest-form" method="post" action="/admin/coupons"><label>Codice <input name="code" required maxlength="30"></label> <button class="button">Segna come usato</button></form>`);
}

async function route(request, env) {
  const url = new URL(request.url);
  const { pathname } = url;

  if (request.method === "GET" || request.method === "HEAD") {
    const asset = siteAssets[pathname === "/" ? "/index.html" : pathname];
    if (asset) {
      const [type, value, binary] = asset;
      const body = request.method === "HEAD" ? null : binary ? Uint8Array.from(atob(value), c => c.charCodeAt(0)) : value;
      return new Response(body, { headers: { "Content-Type": type, "X-Content-Type-Options": "nosniff", "Cache-Control": "no-cache" } });
    }
  }

  if (pathname.startsWith("/admin") && !isAdmin(request, env)) return html("Accesso riservato", "", 403);
  if (request.method === "GET") {
    if (pathname === "/admin") return renderAdmin(env);
    if (pathname === "/api/tables") return availableTables(env, url.searchParams);
    if (pathname === "/api/birthday-availability") return Response.json(deliveryChannels(env), { headers: { "Cache-Control": "no-store" } });
    if (["/compleanno/conferma", "/compleanno/annulla"].includes(pathname)) return handleBirthdayLink(request, env, url);
  }

  if (request.method === "POST") {
    if (pathname === "/api/birthday-run") {
      if (!env.BIRTHDAY_JOB_SECRET || request.headers.get("Authorization") !== "Bearer " + env.BIRTHDAY_JOB_SECRET) return json("error", 403);
      return runBirthdayJob(env, url.origin);
    }
    if ((request.headers.get("Origin") && request.headers.get("Origin") !== url.origin) ||
        request.headers.get("Sec-Fetch-Site") === "cross-site") return json("error", 403);

    const form = await readForm(request);
    if (!form || form.get("website")) return json("invalid", 400);
    if (pathname === "/api/reservations") return saveReservation(env, form);
    if (pathname === "/api/birthday") return joinBirthday(env, form, url.origin);
    if (["/compleanno/conferma", "/compleanno/annulla"].includes(pathname)) return handleBirthdayLink(request, env, url, form);
    if (pathname === "/admin/reservations") {
      const status = form.get("status");
      if (!["confirmed", "declined"].includes(status)) return html("Stato non valido", "", 400);
      await env.DB.prepare("UPDATE reservations SET status=? WHERE id=? AND status='pending'").bind(status, form.get("id")).run();
      return Response.redirect(url.origin + "/admin", 303);
    }
    if (pathname === "/admin/coupons") {
      const code = (form.get("code") ?? "").trim().toUpperCase();
      const result = await env.DB.prepare("UPDATE birthday_coupons SET used_at=? WHERE code=? AND sent_at IS NOT NULL AND used_at IS NULL AND expires>=?")
        .bind(timestamp(), code, dateFormatter.format(new Date())).run();
      return html(result.meta.changes ? "Codice utilizzato" : "Codice non valido o già utilizzato", '<p><a href="/admin">Torna alla gestione</a></p>');
    }
  }

  return html("Pagina non trovata", "", 404);
}

export default {
  async fetch(request, env) {
    try {
      return await route(request, env);
    } catch (error) {
      console.error("Sindbad request error", error.message);
      return json("error", 500);
    }
  }
};
