import { View } from "react-native";
import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <View
      style={{
        borderRadius: 24,
        padding: 20,
        backgroundColor: "rgba(17,24,39,0.85)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)"
      }}
    >
      {children}
    </View>
  );
}
