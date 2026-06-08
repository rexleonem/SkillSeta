import type { RequestHandler } from "express";
import crypto from "node:crypto";

export const requestId: RequestHandler = (req, _res, next) => {
  req.headers["x-request-id"] = req.headers["x-request-id"] ?? crypto.randomUUID();
  next();
};
