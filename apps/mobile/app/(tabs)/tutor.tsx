import { Text, View } from "react-native";

export default function TutorTab() {
  return (
    <View className="flex-1 bg-slate-950 px-6 pt-16">
      <Text className="text-4xl font-black text-white">AI Tutor</Text>
      <Text className="mt-3 text-slate-300">Router-backed chat, hints, and instant quizzes.</Text>
    </View>
  );
}
