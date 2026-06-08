import type { AIResponse } from "@skillseta/types";
import { env, fetchJson, hasKey, providerFallback } from "../shared.js";

export async function geminiChat(prompt: string): Promise<AIResponse> {
  if (!hasKey(env.GEMINI_API_KEY)) {
    return providerFallback("gemini", "plan", prompt);
  }

  const response = await fetchJson<{ candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> }>(
    `${env.GEMINI_BASE_URL ?? "https://generativelanguage.googleapis.com"}/v1beta/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
    {
      method: "POST",
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );

  return {
    provider: "gemini",
    type: "plan",
    content: response.candidates?.[0]?.content?.parts?.[0]?.text ?? ""
  };
}
