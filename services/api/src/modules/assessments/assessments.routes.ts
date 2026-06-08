import { Router } from "express";

export const assessmentsRouter = Router();

assessmentsRouter.get("/", (_req, res) => {
  res.json([]);
});
