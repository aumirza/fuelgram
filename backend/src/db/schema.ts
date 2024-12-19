import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const timestamps = {
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
};

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  ...timestamps,
});

export const userInsertSchema = createInsertSchema(users);

export type IUser = typeof users.$inferSelect;

export const mediaGalleries = pgTable("media_galleries", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  ...timestamps,
});

export const medias = pgTable("medias", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().notNull(),
  description: varchar().notNull(),
  type: varchar().notNull(),
  url: varchar().notNull(),
  ...timestamps,
  ownerId: integer("owner_id")
    .notNull()
    .references(() => users.id),
  galleryId: integer("gallery_id")
    .notNull()
    .references(() => mediaGalleries.id),
});

export const fuelUsersTags = pgTable("fuel_users_tags", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer("user_id").references(() => users.id),
  fuelId: integer("fuel_id").references(() => fuels.id),
  ...timestamps,
});

export const fuels = pgTable("fuels", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  type: varchar(), // create, checklists, quote, gallery , etc
  // checklist
  // quote
  galleryId: integer("gallery_id").references(() => mediaGalleries.id),
  content: varchar(),
  ...timestamps,
});
