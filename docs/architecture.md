# Skillseta Architecture

Skillseta is organized as a monorepo with thin, focused services:

- Web app for the learner experience
- Mobile app for daily learning and quick practice
- Admin panel for skill graph and content operations
- Backend API for auth, progress, skills, and domain data
- AI service for routing requests across DeepSeek, Gemini, and Groq

## Core concepts

- Skill graph: the source of truth for prerequisites and unlocks
- Learning path: a personalized traversal of the graph
- Mastery: validated competency, not just content consumption
- AI router: deterministic selection of the right model for the job

## AI division of labour

- DeepSeek: conceptual teaching
- Gemini: context and planning
- Groq: low-latency interaction and evaluation

## Scaling posture

The codebase is intentionally split so each app/service can scale independently, while shared packages keep the domain model and UI primitives aligned.
