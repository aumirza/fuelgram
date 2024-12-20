import { createServer } from "http";
import morgan from "morgan";

import { PORT } from "./config";
import app from "./app";
import { connectToDatabase } from "./db/db";

const logger = morgan("dev");
app.use(logger);

const server = createServer(app);

server.listen(PORT, () => {
  connectToDatabase();
  console.log("Server is running on port " + PORT);
});
