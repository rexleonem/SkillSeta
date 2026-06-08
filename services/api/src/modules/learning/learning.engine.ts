export type LearningState = "locked" | "available" | "in_progress" | "validated";

export function nextLearningState(masteryScore: number, readinessScore: number): LearningState {
  if (masteryScore >= 80) return "validated";
  if (readinessScore >= 80) return "available";
  if (readinessScore >= 40) return "in_progress";
  return "locked";
}

export function shouldUnlockNode(masteryScore: number, masteryTarget: number) {
  return masteryScore >= masteryTarget;
}
