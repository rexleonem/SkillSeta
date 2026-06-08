export type AiTask = "explanation" | "planning" | "quiz" | "evaluation" | "project" | "general";

export function selectModel(task: AiTask) {
  switch (task) {
    case "explanation":
      return "deepseek";
    case "planning":
      return "gemini";
    case "quiz":
    case "evaluation":
      return "groq";
    case "project":
      return "gemini";
    default:
      return "deepseek";
  }
}
