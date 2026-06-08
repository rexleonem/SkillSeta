export interface MemoryRecord {
  userId: string;
  topic: string;
  value: string;
  timestamp: string;
}

export const memoryStore = new Map<string, MemoryRecord[]>();
