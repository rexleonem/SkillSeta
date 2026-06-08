import type { RequestHandler } from "express";

import { HttpError } from "../utils/http.js";

export const requireRole = (role: "admin" | "user"): RequestHandler => {
  return (req, _res, next) => {
    const user = req.user;
    if (!user) return next(new HttpError(401, "Unauthorized"));
    if (user.role !== role) return next(new HttpError(403, "Forbidden"));
    next();
  };
};
