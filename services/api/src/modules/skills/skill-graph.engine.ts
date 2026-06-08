export interface SkillGraphNode {
  id: string;
  prerequisites: string[];
  masteryScore: number;
  masteryTarget: number;
}

export function resolveDependencies(node: SkillGraphNode, graph: SkillGraphNode[]) {
  return graph.filter((candidate) => node.prerequisites.includes(candidate.id));
}

export function isNodeUnlocked(node: SkillGraphNode, graph: SkillGraphNode[]) {
  const dependencies = resolveDependencies(node, graph);
  return dependencies.every((dependency) => dependency.masteryScore >= dependency.masteryTarget);
}

export function calculateReadinessScore(node: SkillGraphNode, graph: SkillGraphNode[]) {
  const dependencies = resolveDependencies(node, graph);
  if (dependencies.length === 0) return 100;

  const total = dependencies.reduce(
    (sum, dependency) =>
      sum +
      Math.min(100, (dependency.masteryScore / Math.max(1, dependency.masteryTarget)) * 100),
    0
  );

  return Math.round(total / dependencies.length);
}

export function calculateMasteryState(masteryScore: number, masteryTarget: number) {
  if (masteryScore >= masteryTarget) return "mastered";
  if (masteryScore >= masteryTarget * 0.7) return "developing";
  return "emerging";
}
