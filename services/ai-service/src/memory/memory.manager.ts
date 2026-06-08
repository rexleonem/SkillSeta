import { memoryStore, type MemoryRecord } from "./index.js";

export function remember(userId: string, topic: string, value: string) {
  const records = memoryStore.get(userId) ?? [];
  const next: MemoryRecord = {
    userId,
    topic,
    value,
    timestamp: new Date().toISOString()
  };

  memoryStore.set(userId, [...records, next]);
  return next;
}

export function recall(userId: string, topic?: string) {
  const records = memoryStore.get(userId) ?? [];
  return topic ? records.filter((record) => record.topic === topic) : records;
}
