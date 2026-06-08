import type { AIResponse } from "@skillseta/types";
import { apiJson } from "@skillseta/utils";

export interface AiSdkOptions {
  baseUrl: string;
}

export function createAiSdk(options: AiSdkOptions) {
  return {
    route: (input: {
      message: string;
      context?: Record<string, unknown>;
    }) =>
      apiJson<AIResponse>(`${options.baseUrl}/router`, {
        method: "POST",
        body: JSON.stringify(input)
      }),
    explain: (message: string, context?: Record<string, unknown>) =>
      apiJson<AIResponse>(`${options.baseUrl}/router`, {
        method: "POST",
        body: JSON.stringify({ message: `Explain: ${message}`, context })
      }),
    plan: (message: string, context?: Record<string, unknown>) =>
      apiJson<AIResponse>(`${options.baseUrl}/router`, {
        method: "POST",
        body: JSON.stringify({ message: `Plan: ${message}`, context })
      }),
    quiz: (message: string, context?: Record<string, unknown>) =>
      apiJson<AIResponse>(`${options.baseUrl}/router`, {
        method: "POST",
        body: JSON.stringify({ message: `Quiz: ${message}`, context })
      }),
    evaluate: (message: string, context?: Record<string, unknown>) =>
      apiJson<AIResponse>(`${options.baseUrl}/router`, {
        method: "POST",
        body: JSON.stringify({ message: `Evaluate: ${message}`, context })
      })
  };
}
