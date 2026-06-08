import { Router } from "express";
import { requireAuth } from "../auth/auth.middleware.js";

export const usersRouter = Router();

usersRouter.get("/me", requireAuth, (req, res) => {
  res.json({
    id: req.user?.sub ?? "demo-user",
    email: "learner@skillseta.dev",
    name: "Skillseta Learner",
    role: req.user?.role ?? "user"
  });
});
