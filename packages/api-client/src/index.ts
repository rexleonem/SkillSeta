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

export function createApiClient(options: ApiClientOptions) {
  const headers = () =>
    options.accessToken ? { Authorization: `Bearer ${options.accessToken}` } : {};

  return {
    auth: {
      me: () => apiJson<User>(`${options.baseUrl}/users/me`, { headers: headers() })
    },
    skills: {
      list: () => apiJson<Skill[]>(`${options.baseUrl}/skills`, { headers: headers() })
    },
    learning: {
      listPaths: () =>
        apiJson<LearningPath[]>(`${options.baseUrl}/learning/paths`, { headers: headers() })
    },
    progress: {
      list: () => apiJson<Progress[]>(`${options.baseUrl}/progress`, { headers: headers() })
    },
    assessments: {
      list: () =>
        apiJson<Assessment[]>(`${options.baseUrl}/assessments`, { headers: headers() })
    },
    projects: {
      list: () => apiJson<Project[]>(`${options.baseUrl}/projects`, { headers: headers() })
    },
    ai: {
      ask: (message: string) =>
        apiJson<AIResponse>(`${options.baseUrl}/ai/chat`, {
          method: "POST",
          headers: headers(),
          body: JSON.stringify({ message })
        })
    }
  };
}
