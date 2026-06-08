import type { AIResponse } from "@skillseta/types";
import { env, fetchJson, hasKey, providerFallback } from "../shared.js";

export async function deepseekChat(prompt: string): Promise<AIResponse> {
  if (!hasKey(env.DEEPSEEK_API_KEY)) {
    return providerFallback("deepseek", "explanation", prompt);
  }

  const response = await fetchJson<{ choices: Array<{ message: { content: string } }> }>(
    `${env.DEEPSEEK_BASE_URL ?? "https://api.deepseek.com"}/chat/completions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }]
      })
    }
  );

  return {
    provider: "deepseek",
    type: "explanation",
    content: response.choices[0]?.message.content ?? ""
  };
}
