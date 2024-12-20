import { z } from "zod";
import { users } from "../db/schema";
import { publicUserSchema } from "../schemas";

type IUser = typeof users.$inferSelect;
type IUserPublic = z.infer<typeof publicUserSchema>;
