import type { AIResponse } from "@skillseta/types";
import { deepseekChat } from "../providers/deepseek/client.js";
import { groqChat } from "../providers/groq/client.js";

export function evaluateWithGroq(message: string, context?: Record<string, unknown>) {
  return Promise.all([
    deepseekChat(`Create a concise evaluation rubric for: ${message}`),
    groqChat([message, JSON.stringify(context ?? {})].join("\n"))
  ]).then(([rubric, feedback]): AIResponse => ({
    provider: "groq",
    type: "evaluation",
    content: `${rubric.content}\n\nFeedback:\n${feedback.content}`,
    metadata: {
      rubric,
      feedback
    }
  }));
}
