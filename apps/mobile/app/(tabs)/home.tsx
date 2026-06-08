import { Text, View } from "react-native";

export default function HomeTab() {
  return (
    <View className="flex-1 bg-slate-950 px-6 pt-16">
      <Text className="text-4xl font-black text-white">Home Feed</Text>
      <Text className="mt-3 text-slate-300">Adaptive lessons, quick wins, and next steps.</Text>
    </View>
  );
}
