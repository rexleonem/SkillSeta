import { create } from "zustand";

interface MobileState {
  streak: number;
  incrementStreak: () => void;
}

export const useMobileStore = create<MobileState>((set) => ({
  streak: 1,
  incrementStreak: () => set((state) => ({ streak: state.streak + 1 }))
}));
