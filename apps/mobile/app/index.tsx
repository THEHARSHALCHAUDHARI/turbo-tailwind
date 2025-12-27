import { View, Text, Pressable, TextInput } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-background justify-center items-center p-6 gap-4">
       <Text className="text-foreground text-xl font-bold">Wraith System</Text>
       
       {/* 1. Use standard Native TextInput instead of <Input> */}
       <TextInput 
         placeholder="Enter Access Code..." 
         placeholderTextColor="#85766a"
         className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground"
       />
       
       {/* 2. Use standard Pressable instead of <Button> */}
       <Pressable 
         className="bg-primary h-10 px-4 py-2 rounded-md flex-row items-center justify-center"
         onPress={() => alert('Authenticated')}
       >
          <Text className="text-primary-foreground font-medium">
            Authenticate
          </Text>
       </Pressable>
    </View>
  )
}