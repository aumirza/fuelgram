import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { fuels, users } from "../db/schema";

export const userInsertSchema = createInsertSchema(users);
export const publicUserSchema = createSelectSchema(users).pick({
  id: true,
  name: true,
  email: true,
  username: true,
});

export const fuelsSelectSchema = createSelectSchema(fuels).pick({
  id: true,
  galleryId: true,
  content: true,
  createdAt: true,
  updatedAt: true,
});
