CREATE TABLE reservations (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  contact TEXT NOT NULL,
  day TEXT NOT NULL,
  slot TEXT NOT NULL,
  guests INTEGER NOT NULL CHECK (guests BETWEEN 1 AND 20),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'declined')),
  created_at TEXT NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX reservations_open_request ON reservations (contact, day, slot) WHERE status IN ('pending', 'confirmed');
--> statement-breakpoint
CREATE TABLE birthday_members (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  contact TEXT NOT NULL UNIQUE,
  birthday_day INTEGER NOT NULL,
  birthday_month INTEGER NOT NULL,
  token TEXT NOT NULL UNIQUE,
  consent_at TEXT NOT NULL,
  verified_at TEXT,
  unsubscribed_at TEXT
);
--> statement-breakpoint
CREATE TABLE birthday_coupons (
  id TEXT PRIMARY KEY,
  member_id TEXT NOT NULL REFERENCES birthday_members(id),
  birthday TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  discount INTEGER NOT NULL,
  expires TEXT NOT NULL,
  sent_at TEXT,
  reminded_at TEXT,
  used_at TEXT,
  UNIQUE (member_id, birthday)
);
--> statement-breakpoint
CREATE TABLE birthday_job_lock (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  token TEXT NOT NULL,
  expires_at INTEGER NOT NULL
);
