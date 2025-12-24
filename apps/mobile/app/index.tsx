import { Input, Button } from "@repo/ui"
import { View, Text } from "react-native"

export default function Home() {
  return (
    <View className="flex-1 bg-background justify-center items-center p-6 gap-4">
       <Text className="text-foreground text-xl font-bold">Wraith System</Text>
       
       {/* 🚀 The Universal Input */}
       <Input placeholder="Enter Access Code..." />
       
       <Button variant="default" label="Authenticate" onPress={() => {}} />
    </View>
  )
}