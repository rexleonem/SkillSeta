import { Text, View } from "react-native";

export function DashboardWidget({
  title,
  value,
  subtitle
}: {
  title: string;
  value: string;
  subtitle?: string;
}) {
  return (
    <View
      style={{
        padding: 18,
        borderRadius: 24,
        backgroundColor: "#111827",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
        gap: 8
      }}
    >
      <Text style={{ color: "#9ca3af", fontSize: 12, textTransform: "uppercase" }}>{title}</Text>
      <Text style={{ color: "#fff", fontSize: 28, fontWeight: "800" }}>{value}</Text>
      {subtitle ? <Text style={{ color: "#d1d5db" }}>{subtitle}</Text> : null}
    </View>
  );
}
