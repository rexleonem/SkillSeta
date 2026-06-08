export function recalculateMasteryScore(currentScore: number, assessmentScore: number) {
  return Math.min(100, Math.round(currentScore * 0.7 + assessmentScore * 0.3));
}

export function isCompleted(masteryScore: number, masteryTarget = 80) {
  return masteryScore >= masteryTarget;
}
