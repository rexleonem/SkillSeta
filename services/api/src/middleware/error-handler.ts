import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  const status =
    error instanceof ZodError
      ? 400
      : typeof error?.status === "number"
        ? error.status
        : 500;
  res.status(status).json({
    error: error?.message ?? "Internal server error"
  });
};
