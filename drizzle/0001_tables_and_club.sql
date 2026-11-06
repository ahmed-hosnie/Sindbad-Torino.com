ALTER TABLE reservations ADD COLUMN table_number INTEGER CHECK (table_number > 0);
--> statement-breakpoint
ALTER TABLE reservations ADD COLUMN duration_minutes INTEGER NOT NULL DEFAULT 90 CHECK (duration_minutes BETWEEN 30 AND 240);
--> statement-breakpoint
CREATE INDEX reservations_table_time ON reservations (table_number, day, slot) WHERE status IN ('pending', 'confirmed');
--> statement-breakpoint
ALTER TABLE birthday_members ADD COLUMN email TEXT;
--> statement-breakpoint
ALTER TABLE birthday_members ADD COLUMN phone TEXT;
--> statement-breakpoint
ALTER TABLE birthday_members ADD COLUMN delivery_contact TEXT;
--> statement-breakpoint
CREATE INDEX birthday_members_due ON birthday_members (birthday_month, birthday_day) WHERE verified_at IS NOT NULL AND unsubscribed_at IS NULL;
--> statement-breakpoint
ALTER TABLE birthday_coupons ADD COLUMN benefit TEXT NOT NULL DEFAULT 'discount';
--> statement-breakpoint
ALTER TABLE birthday_coupons ADD COLUMN delivery_claimed_at TEXT;
