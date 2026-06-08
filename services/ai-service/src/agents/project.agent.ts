import type { AIResponse } from "@skillseta/types";
import { geminiChat } from "../providers/gemini/client.js";
import { deepseekChat } from "../providers/deepseek/client.js";

export async function generateProject(message: string, context?: Record<string, unknown>) {
  const [concept, guidance] = await Promise.all([
    deepseekChat(`Generate a project brief for: ${message}`),
    geminiChat([message, JSON.stringify(context ?? {})].join("\n"))
  ]);

  return {
    provider: "gemini",
    type: "project",
    content: `${concept.content}\n\nProject Guidance:\n${guidance.content}`
  } satisfies AIResponse;
}
