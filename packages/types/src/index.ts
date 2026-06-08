export type Role = "admin" | "user";

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  id: string;
  userId: string;
  bio?: string;
  avatarUrl?: string;
  headline?: string;
}

export interface Skill {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  readiness?: number;
}

export interface SkillNode {
  id: string;
  skillId: string;
  title: string;
  description: string;
  difficulty: number;
  masteryScore: number;
  masteryTarget?: number;
  orderIndex?: number;
  prerequisites: string[];
  unlocks: string[];
}

export interface LearningPath {
  id: string;
  userId: string;
  skillId: string;
  status: "draft" | "active" | "completed" | "archived";
  state?: "locked" | "available" | "in_progress" | "validated";
  readiness?: number;
  metadata?: Record<string, unknown> | null;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: "draft" | "active" | "submitted" | "reviewed" | "archived";
  repositoryUrl?: string | null;
  submissionUrl?: string | null;
}

export interface Assessment {
  id: string;
  userId?: string;
  skillNodeId: string;
  status?: "pending" | "passed" | "failed";
  score: number;
  feedback?: string;
  rubric?: Record<string, unknown> | null;
}

export interface AIResponse {
  provider: "deepseek" | "gemini" | "groq";
  type: "explanation" | "plan" | "quiz" | "evaluation" | "project";
  content: string;
  metadata?: Record<string, unknown>;
}

export interface Progress {
  id: string;
  userId: string;
  skillNodeId: string;
  masteryScore: number;
  completedAt?: string | null;
}

export interface AIInteraction {
  id: string;
  userId?: string | null;
  provider: "deepseek" | "gemini" | "groq";
  interactionType: "explanation" | "planning" | "quiz" | "evaluation" | "project" | "support";
  prompt: string;
  response: string;
  metadata?: Record<string, unknown> | null;
  createdAt: string;
}
