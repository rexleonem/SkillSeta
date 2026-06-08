import { Router } from "express";

export const projectsRouter = Router();

projectsRouter.get("/", (_req, res) => {
  res.json([
    {
      id: "project-1",
      title: "Build a Skill Graph Explorer",
      description: "Visualize dependencies and mastery states",
      status: "draft"
    }
  ]);
});
