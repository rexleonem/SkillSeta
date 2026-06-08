import type { AIResponse } from "@skillseta/types";
import { classifyTask } from "./task-classifier.js";
import { selectModel } from "./model-selector.js";
import { explainWithDeepSeek } from "../agents/tutor.agent.js";
import { planWithGemini } from "../agents/planner.agent.js";
import { quizWithGroq } from "../agents/quiz.agent.js";
import { evaluateWithGroq } from "../agents/evaluator.agent.js";
import { generateProject } from "../agents/project.agent.js";
import { remember } from "../memory/memory.manager.js";

export interface RouteInput {
  message: string;
  context?: Record<string, unknown>;
}

export async function routeRequest(input: RouteInput): Promise<AIResponse> {
  const task = classifyTask(input.message);
  const provider = selectModel(task);
  const userId = typeof input.context?.userId === "string" ? input.context.userId : undefined;

  if (userId) {
    remember(userId, task, input.message);
  }

  switch (task) {
    case "explanation":
      return explainWithDeepSeek(input.message, input.context);
    case "planning":
      return planWithGemini(input.message, input.context);
    case "quiz":
      return quizWithGroq(input.message, input.context);
    case "evaluation":
      return evaluateWithGroq(input.message, input.context);
    case "project":
      return generateProject(input.message, input.context);
    default:
      return {
        provider,
        type: "explanation",
        content: "The AI router could not determine a specialized task."
      };
  }
}
