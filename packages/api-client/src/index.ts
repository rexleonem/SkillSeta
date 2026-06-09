import type {
  AIResponse,
  Assessment,
  LearningPath,
  Progress,
  Project,
  Skill,
  User
} from "@skillseta/types";
import { apiJson } from "@skillseta/utils";

export interface ApiClientOptions {
  baseUrl: string;
  accessToken?: string;
}

function authHeaders(accessToken?: string): HeadersInit | undefined {
  return accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined;
}

export function createApiClient(options: ApiClientOptions) {
  return {
    auth: {
      me: () => apiJson<User>(`${options.baseUrl}/users/me`, { headers: authHeaders(options.accessToken) })
    },
    skills: {
      list: () => apiJson<Skill[]>(`${options.baseUrl}/skills`, { headers: authHeaders(options.accessToken) })
    },
    learning: {
      listPaths: () =>
        apiJson<LearningPath[]>(`${options.baseUrl}/learning/paths`, {
          headers: authHeaders(options.accessToken)
        })
    },
    progress: {
      list: () => apiJson<Progress[]>(`${options.baseUrl}/progress`, {
        headers: authHeaders(options.accessToken)
      })
    },
    assessments: {
      list: () =>
        apiJson<Assessment[]>(`${options.baseUrl}/assessments`, {
          headers: authHeaders(options.accessToken)
        })
    },
    projects: {
      list: () =>
        apiJson<Project[]>(`${options.baseUrl}/projects`, {
          headers: authHeaders(options.accessToken)
        })
    },
    ai: {
      ask: (message: string) =>
        apiJson<AIResponse>(`${options.baseUrl}/ai/chat`, {
          method: "POST",
          headers: authHeaders(options.accessToken),
          body: JSON.stringify({ message })
        })
    }
  };
}
