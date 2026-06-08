import { z } from "zod";

const schema = z.object({
  AI_SERVICE_PORT: z.coerce.number().default(4100),
  DEEPSEEK_API_KEY: z.string().optional(),
  DEEPSEEK_BASE_URL: z.string().url().default("https://api.deepseek.com"),
  GEMINI_API_KEY: z.string().optional(),
  GEMINI_BASE_URL: z.string().url().default("https://generativelanguage.googleapis.com"),
  GROQ_API_KEY: z.string().optional(),
  GROQ_BASE_URL: z.string().url().default("https://api.groq.com")
});

export const env = schema.parse(process.env);
