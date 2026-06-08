import type { AiTask } from "./model-selector.js";

export function classifyTask(message: string): AiTask {
  const text = message.toLowerCase();

  if (/(explain|teach|what is|simplify|walk me through)/.test(text)) return "explanation";
  if (/(plan|roadmap|learning path|road map|strategy|recommend)/.test(text)) return "planning";
  if (/(quiz|question|test me|flashcard)/.test(text)) return "quiz";
  if (/(evaluate|grade|review|check my answer|assess)/.test(text)) return "evaluation";
  if (/(project|build me|capstone|portfolio|assignment)/.test(text)) return "project";

  return "general";
}
