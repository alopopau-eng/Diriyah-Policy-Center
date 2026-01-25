import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Cookie consent types
export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

// Bio link types
export interface BioLink {
  id: string;
  title: string;
  titleAr: string;
  url: string;
  icon: string;
  category: 'social' | 'official' | 'experience';
}

// Page content types
export interface PageContent {
  title: string;
  titleAr: string;
  content: string;
  contentAr: string;
  lastUpdated: string;
}
