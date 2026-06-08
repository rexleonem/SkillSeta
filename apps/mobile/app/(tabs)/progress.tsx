import { Text, View } from "react-native";

export default function ProgressTab() {
  return (
    <View className="flex-1 bg-slate-950 px-6 pt-16">
      <Text className="text-4xl font-black text-white">Progress</Text>
      <Text className="mt-3 text-slate-300">Skill mastery, unlocked nodes, and completion states.</Text>
    </View>
  );
}
