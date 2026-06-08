import { deepseekChat } from "../providers/deepseek/client.js";

export function explainWithDeepSeek(message: string, context?: Record<string, unknown>) {
  return deepseekChat([message, JSON.stringify(context ?? {})].join("\n"));
}

export function simplifyWithDeepSeek(message: string) {
  return deepseekChat(`Simplify: ${message}`);
}
