import { groqChat } from "../providers/groq/client.js";

export function quizWithGroq(message: string, context?: Record<string, unknown>) {
  return groqChat([message, JSON.stringify(context ?? {})].join("\n"));
}
