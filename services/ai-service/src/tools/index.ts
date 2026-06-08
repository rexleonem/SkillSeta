export function normalizeAiText(value: string) {
  return value.trim().replace(/\s+/g, " ");
}
