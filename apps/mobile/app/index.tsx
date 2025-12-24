import { View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-black px-6">
      
      {/* Visual Indicator (Optional "Glow" replacement) */}
      <View className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl -top-20 -left-20" />

      {/* Main Content */}
      <Text className="text-4xl font-bold text-primary mb-2">
        Wraith App
      </Text>
      
      <Text className="text-muted-foreground text-center text-lg mb-12">
        System Initialized. Awaiting Input.
      </Text>

      {/* Action Button */}
      <Pressable 
        className="bg-primary px-8 py-4 rounded-full active:opacity-90 active:scale-95 transform transition-all"
        onPress={() => alert("System Active")}
      >
        <Text className="text-primary-foreground font-bold text-lg">
          Execute
        </Text>
      </Pressable>

    </View>
  );
}