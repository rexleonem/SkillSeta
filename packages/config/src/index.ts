import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  APP_NAME: z.string().default("Skillseta"),
  DATABASE_URL: z.string().url().or(z.string().startsWith("postgresql://")),
  DIRECT_URL: z.string().optional(),
  AI_SERVICE_URL: z.string().url().default("http://localhost:4100/api/v1"),
  API_PORT: z.coerce.number().default(4000),
  AI_SERVICE_PORT: z.coerce.number().default(4100),
  WEB_PORT: z.coerce.number().default(3000),
  ADMIN_PORT: z.coerce.number().default(3001),
  JWT_ACCESS_SECRET: z.string().min(16),
  JWT_REFRESH_SECRET: z.string().min(16),
  JWT_ACCESS_EXPIRES_IN: z.string().default("15m"),
  JWT_REFRESH_EXPIRES_IN: z.string().default("30d")
});

export type AppEnv = z.infer<typeof envSchema>;

export function parseEnv(env: Record<string, string | undefined> = process.env): AppEnv {
  return envSchema.parse(env);
}
