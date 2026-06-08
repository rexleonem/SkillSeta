import { createAiSdk } from "@skillseta/ai-sdk";

export const aiClient = createAiSdk({
  baseUrl: process.env.NEXT_PUBLIC_AI_BASE_URL ?? "http://localhost:4100/api/v1"
});
