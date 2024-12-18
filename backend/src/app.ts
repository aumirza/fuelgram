import express from "express";
import logger from "morgan";
import cors from "cors";
import createError from "http-errors";
// import swaggerUi from "swagger-ui-express";

import { corsOptions } from "./config/cors";
import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

// middlewares
app.use(logger("dev")); // Log requests to console
app.use(express.json()); // Parse JSON from the request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors(corsOptions)); // Enable CORS

// app.use(express.static("public"));

// Serve static assets if in production
// if (process.env.NODE_ENV === "production") {
//     // Set static folder
//     app.use(express.static("client/build"));

//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//     });
// }

// Attaching routers
app.use(router);

// app.use("/api/v1/", router);
// app.use('/', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))

// catch 404 and forward to error handler
app.use(function (req, res, next: CallableFunction) {
  next(createError(404));
});

// error handler
app.use(errorHandler);

export default app;
