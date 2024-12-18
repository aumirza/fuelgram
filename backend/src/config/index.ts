import path from "path";
import dotenv from "dotenv";
import { normalizePort } from "../utils/normalizePort";

const dotenvConfig = {
  path: path.resolve(__dirname, "../../.env"),
};
dotenv.config(dotenvConfig);

export const PORT = normalizePort(process.env.PORT || 5000);
export const APP_SECRET = process.env.APP_SECRET || "secret";
export const DB_URL =
  process.env.DB_URL || "pg://postgres:postgres@localhost:5432/postgres";
