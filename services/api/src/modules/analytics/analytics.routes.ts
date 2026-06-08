import { Router } from "express";
import { requireAuth } from "../auth/auth.middleware.js";
import { requireRole } from "../../middleware/rbac.js";

export const analyticsRouter = Router();

analyticsRouter.get("/", requireAuth, requireRole("admin"), (_req, res) => {
  res.json({ users: 1, activePaths: 1, masteryAvg: 72 });
});
