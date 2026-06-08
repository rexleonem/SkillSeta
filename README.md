# Skillseta

Skillseta is a production-grade, AI-native skill intelligence platform. It is designed as a monorepo so the web app, mobile app, admin panel, backend API, AI orchestration service, and shared packages evolve together.

## What this repo contains

- `apps/web`: Next.js App Router experience for learners
- `apps/mobile`: Expo React Native experience for mobile learning
- `apps/admin`: Vite admin console
- `services/api`: Express + Prisma backend API
- `services/ai-service`: AI router and orchestration service
- `packages/ui`: shared cross-platform UI primitives
- `packages/types`: shared domain types
- `packages/utils`: shared helpers
- `packages/config`: shared env and runtime config
- `packages/api-client`: typed API client
- `packages/ai-sdk`: AI service client and abstractions
- `infra/prisma`: canonical Prisma schema
- `infra/docker`: container and compose assets
- `infra/nginx`: reverse proxy config

## Architecture

Skillseta is built around four core engines:

1. Skill Graph Engine
2. AI Router Engine
3. Learning Engine
4. Mastery Engine

The AI layer uses a division of labour:

- DeepSeek for structured teaching and explanations
- Gemini for context, planning, and learning-path reasoning
- Groq for low-latency chat, quizzes, and evaluation

Every AI request should go through the router in `services/ai-service`.

## Getting started

1. Install dependencies:

```bash
pnpm install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Run the database:

```bash
docker compose -f infra/docker/docker-compose.yml up -d postgres
```

4. Generate Prisma client and migrate:

```bash
pnpm --filter @skillseta/api prisma:generate
pnpm --filter @skillseta/api prisma:migrate
```

5. Start the stack:

```bash
pnpm dev
```

## Repo scripts

- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm format`

## Notes

- This scaffold is intentionally modular so each app/service can be scaled independently.
- The Prisma schema is future-ready for `pgvector` embeddings and AI memory.
- The shared UI package is designed to work with React Native and web via `react-native-web` style consumption.
