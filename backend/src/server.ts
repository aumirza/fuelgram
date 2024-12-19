import { createServer } from "http";
import morgan from "morgan";

import { PORT } from "./config";
import app from "./app";

const logger = morgan("dev");
app.use(logger);

const server = createServer(app);

server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
