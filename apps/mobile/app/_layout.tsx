import "../global.css"; // ⚡️ CSS Import (Critical for NativeWind)
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useColorScheme } from "react-native"; // Or your custom hook if you have one

export default function RootLayout() {
  // Optional: Detect dark mode for status bar styling
  const colorScheme = useColorScheme();

  return (
    // 1. Global Wrapper with Background Color
    // This ensures that even during transitions, the background is your "Wraith" beige/dark color.
    <View className="flex-1 bg-background">
      
      {/* 2. Main Stack Navigator */}
      <Stack
        screenOptions={{
          headerShown: false, // We usually want to build our own headers
          contentStyle: { backgroundColor: 'transparent' }, // Let the View bg show through
          animation: 'fade', // Optional: Smoother transitions
        }}
      />
      
      {/* 3. Status Bar Control */}
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </View>
  );
}