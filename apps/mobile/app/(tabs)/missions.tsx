import { Text, View } from "react-native";

export default function MissionsTab() {
  return (
    <View className="flex-1 bg-slate-950 px-6 pt-16">
      <Text className="text-4xl font-black text-white">Daily Missions</Text>
      <Text className="mt-3 text-slate-300">Short, focused tasks that drive mastery forward.</Text>
    </View>
  );
}
