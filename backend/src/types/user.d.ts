import { users } from "../db/schema";

export type IUser = typeof users.$inferSelect;
