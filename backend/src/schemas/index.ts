import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { users } from "../db/schema";

export const userInsertSchema = createInsertSchema(users);
export const publicUserSchema = createSelectSchema(users).pick({
  id: true,
  name: true,
  email: true,
  username: true,
});
