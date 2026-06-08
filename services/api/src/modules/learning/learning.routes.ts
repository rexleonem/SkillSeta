import { Router } from "express";
import { nextLearningState } from "./learning.engine.js";

export const learningRouter = Router();

learningRouter.get("/paths", (_req, res) => {
  res.json([
    {
      id: "path-react",
      userId: "demo-user",
      skillId: "skill-react",
      status: "active",
      state: nextLearningState(55, 72)
    }
  ]);
});
