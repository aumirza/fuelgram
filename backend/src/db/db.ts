import { drizzle } from "drizzle-orm/node-postgres";
import { DB_URL } from "../config";
import * as schema from "./schema";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: DB_URL,
});

export let db = drizzle({ client: pool, schema });

export async function connectToDatabase() {
  try {
    // Test the database connection
    await pool.query("SELECT 1");

    console.log("Database connection established successfully.");
  } catch (error: any) {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1); // Exit process if the database connection is critical
  }
}
