import path from "path";
import dotenv from "dotenv";
import { normalizePort } from "../utils/normalizePort";

const dotenvConfig = {
  path: path.resolve(__dirname, "../../.env"),
};
dotenv.config(dotenvConfig);

export const PORT = normalizePort(process.env.PORT || 5000);

export const APP_SECRET = process.env.APP_SECRET || "secure_app_secret";

export const ACTIVATION_TOKEN_SECRET =
  process.env.ACTIVATION_TOKEN_SECRET || "secure_activation_secret";
export const RESET_PASSWORD_TOKEN_SECRET =
  process.env.RESET_PASSWORD_TOKEN_SECRET || "secure_reset_password_secret";
export const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET || "secure_access_token_secret";
export const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "secure_refresh_token_secret";

export const ACTIVATION_TOKEN_EXPIRES_IN =
  process.env.ACTIVATION_TOKEN_EXPIRES_IN || "1d";
export const RESET_PASSWORD_TOKEN_EXPIRES_IN =
  process.env.RESET_PASSWORD_TOKEN_EXPIRES_IN || "30m";
export const ACCESS_TOKEN_EXPIRES_IN =
  process.env.ACCESS_TOKEN_EXPIRES_IN || "30m";
export const REFRESH_TOKEN_EXPIRES_IN =
  process.env.REFRESH_TOKEN_EXPIRES_IN || "7d";

export const DB_URL =
  process.env.DATABASE_URL ?? "pg://postgres:postgres@localhost:5432/postgres";
