import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-950 px-6">
      <Text className="text-4xl font-black text-white">Skillseta</Text>
      <Text className="mt-3 max-w-sm text-center text-slate-300">
        Daily missions, AI tutoring, and mastery tracking in your pocket.
      </Text>
      <Link
        href="/(tabs)/home"
        className="mt-6 rounded-full bg-white px-5 py-3 font-semibold text-black"
      >
        Enter app
      </Link>
    </View>
  );
}
