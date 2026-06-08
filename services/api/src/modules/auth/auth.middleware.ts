import type { RequestHandler } from "express";

import { verifyAccessToken } from "../../lib/jwt.js";
import { HttpError } from "../../utils/http.js";

export const requireAuth: RequestHandler = (req, _res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return next(new HttpError(401, "Unauthorized"));

  try {
    req.user = verifyAccessToken<{ sub: string; role: "admin" | "user" }>(token);
    next();
  } catch {
    next(new HttpError(401, "Unauthorized"));
  }
};
