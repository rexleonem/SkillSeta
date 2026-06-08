import { Text, View } from "react-native";

export function MissionCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <View className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <Text className="text-lg font-semibold text-white">{title}</Text>
      <Text className="mt-2 text-slate-300">{subtitle}</Text>
    </View>
  );
}
