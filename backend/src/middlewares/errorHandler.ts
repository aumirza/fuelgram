import { DrizzleError } from "drizzle-orm";
import { Request, Response, NextFunction } from "express";
import { DatabaseError } from "pg";
import { ZodError } from "zod";
import { Conflict } from "http-errors";

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

  // handle db errors
  if (err instanceof DatabaseError) {
    res.status(500).json({ message: "Database error", error: err.message });
    return;
  }

  // handle DrizzleError
  if (err instanceof DrizzleError) {
    // return the error
    res.status(500).json({ message: "Drizzle error", error: err.message });
    return;
  }

  if (err instanceof ZodError) {
    // console.error(error.errors);
    res.status(500).json({
      success: false,
      message: "Invalid input",
      error: {
        message: err.message,
        fields: err.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        })),
      },
    });
    return;
  }

  if (err instanceof Conflict) {
    res.status(err.statusCode).json({
      error: err.name,
      message: err.message,
      ...(err.metadata && { metadata: err.metadata }), // Include metadata if available
    });
    return;
  }

  // return the error
  res.status(err.status || 500).json({ message: err.message, error: err });
}
