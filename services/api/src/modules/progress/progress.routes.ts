import { Router } from "express";
import { isCompleted, recalculateMasteryScore } from "./progress.engine.js";

export const progressRouter = Router();

progressRouter.get("/", (_req, res) => {
  res.json([]);
});

progressRouter.post("/simulate", (req, res) => {
  const currentScoreValue = req.body?.currentScore;
  const assessmentScoreValue = req.body?.assessmentScore;
  const currentScore = Number.isFinite(Number(currentScoreValue)) ? Number(currentScoreValue) : 60;
  const assessmentScore = Number.isFinite(Number(assessmentScoreValue))
    ? Number(assessmentScoreValue)
    : 75;
  const nextScore = recalculateMasteryScore(currentScore, assessmentScore);
  res.json({
    masteryScore: nextScore,
    completed: isCompleted(nextScore)
  });
});
