import type { AIResponse } from "@skillseta/types";
import { env, fetchJson, hasKey, providerFallback } from "../shared.js";

export async function groqChat(prompt: string): Promise<AIResponse> {
  if (!hasKey(env.GROQ_API_KEY)) {
    return providerFallback("groq", "quiz", prompt);
  }

  const response = await fetchJson<{ choices: Array<{ message: { content: string } }> }>(
    `${env.GROQ_BASE_URL ?? "https://api.groq.com"}/openai/v1/chat/completions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-70b-versatile",
        messages: [{ role: "user", content: prompt }]
      })
    }
  );

  return {
    provider: "groq",
    type: "quiz",
    content: response.choices[0]?.message.content ?? ""
  };
}
