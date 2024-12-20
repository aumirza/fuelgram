import { ZodError } from "zod";

export function formatZodError(error: ZodError) {
  return {
    message: error.message,
    fields: error.errors.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    })),
  };
}
