import { Text, View } from "react-native";

export function SkillNode({
  title,
  mastery
}: {
  title: string;
  mastery: number;
}) {
  return (
    <View
      style={{
        padding: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.12)",
        backgroundColor: "rgba(15,23,42,0.9)"
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "700" }}>{title}</Text>
      <Text style={{ color: "#a1a1aa", marginTop: 4 }}>Mastery {Math.round(mastery)}%</Text>
    </View>
  );
}
