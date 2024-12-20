import { DrizzleError } from "drizzle-orm";
import { Request, Response, NextFunction } from "express";
import { DatabaseError } from "pg";
import { ZodError } from "zod";
import { Conflict } from "http-errors";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { formatZodError } from "../utils/formatZodError";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // log the error
  console.error(err);

  if (err instanceof JsonWebTokenError || err instanceof TokenExpiredError) {
    res.status(401).json({ message: "Invalid token", error: err.message });
    return;
  }

  // validation error
  if (err instanceof ZodError) {
    // console.error(error.errors);
    res.status(500).json({
      success: false,
      message: "Invalid input",
      error: formatZodError(err),
    });
    return;
  }

  // conflicts like user already exist
  if (err instanceof Conflict) {
    res.status(err.statusCode).json({
      error: err.name,
      message: err.message,
      // ...(err.metadata && { metadata: err.metadata }), // Include metadata if available
    });
    return;
  }

  // handle DrizzleError
  if (err instanceof DrizzleError) {
    // return the error
    res.status(500).json({ message: "Drizzle error", error: err.message });
    return;
  }

  // handle db errors
  if (err instanceof DatabaseError) {
    res.status(500).json({ message: "Database error", error: err.message });
    return;
  }

  // rout not found

  // return the error
  res
    .status(err.status || 500)
    .json({ message: "Internal Server Error", error: err });
}
