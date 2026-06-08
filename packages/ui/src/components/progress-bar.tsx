import { View } from "react-native";

export function ProgressBar({ value }: { value: number }) {
  return (
    <View
      style={{
        height: 10,
        borderRadius: 999,
        backgroundColor: "rgba(255,255,255,0.08)",
        overflow: "hidden"
      }}
    >
      <View
        style={{
          width: `${Math.max(0, Math.min(100, value))}%`,
          height: "100%",
          borderRadius: 999,
          backgroundColor: "#22c55e"
        }}
      />
    </View>
  );
}
