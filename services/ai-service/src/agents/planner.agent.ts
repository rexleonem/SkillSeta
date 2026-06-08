import { geminiChat } from "../providers/gemini/client.js";

export function planWithGemini(message: string, context?: Record<string, unknown>) {
  return geminiChat([message, JSON.stringify(context ?? {})].join("\n"));
}
