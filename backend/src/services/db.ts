import { drizzle } from "drizzle-orm/singlestore/driver";
import { DB_URL } from "../config";

const db = drizzle(DB_URL);
