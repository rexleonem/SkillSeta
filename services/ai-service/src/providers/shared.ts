import { env } from "../utils/env.js";
import type { AIResponse } from "@skillseta/types";

export function hasKey(value?: string) {
  return Boolean(value && value.trim().length > 0);
}

export async function fetchJson<T>(url: string, init: RequestInit) {
  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers ?? {})
    }
  });

  if (!response.ok) {
    throw new Error(`Provider request failed: ${response.status}`);
  }

  return (await response.json()) as T;
}

export function providerFallback(
  provider: "deepseek" | "gemini" | "groq",
  type: AIResponse["type"],
  prompt: string
) {
  return {
    provider,
    type,
    content: `${provider} fallback response: ${prompt}`
  };
}

export { env };
