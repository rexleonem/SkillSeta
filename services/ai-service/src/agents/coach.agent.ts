import { planWithGemini } from "./planner.agent.js";
import { explainWithDeepSeek } from "./tutor.agent.js";

export async function coachUser(message: string, context?: Record<string, unknown>) {
  const plan = await planWithGemini(`Create a coaching plan for: ${message}`, context);
  const explanation = await explainWithDeepSeek(`Explain the next step for: ${message}`, context);

  return {
    plan,
    explanation
  };
}
