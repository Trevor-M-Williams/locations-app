import { sql } from "drizzle-orm";
import {
  doublePrecision,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  address: varchar("address", { length: 256 }).notNull(),
  lat: doublePrecision("lat").notNull(),
  lng: doublePrecision("lng").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
