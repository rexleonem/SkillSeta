import { Router } from "express";
import { calculateReadinessScore } from "./skill-graph.engine.js";

export const skillsRouter = Router();

skillsRouter.get("/", (_req, res) => {
  const graph = [
    {
      id: "node-react-basics",
      prerequisites: [],
      masteryScore: 100,
      masteryTarget: 80
    },
    {
      id: "node-react-state",
      prerequisites: ["node-react-basics"],
      masteryScore: 55,
      masteryTarget: 80
    }
  ];

  res.json([
    {
      id: "skill-react",
      slug: "react",
      title: "React",
      description: "Build interactive user interfaces",
      category: "frontend",
      readiness: calculateReadinessScore(graph[1], graph)
    }
  ]);
});
