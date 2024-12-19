import { drizzle } from "drizzle-orm/node-postgres";
import { DB_URL } from "../config";
import * as schema from "../db/schema";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: DB_URL,
});
export const db = drizzle({ client: pool, schema });
