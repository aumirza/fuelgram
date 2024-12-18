import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true,
};
