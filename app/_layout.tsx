import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerStyle: { backgroundColor: "#f5f7f3" }, headerTintColor: "#264f35" }}>
        <Stack.Screen name="index" options={{ title: "Идеи для отдыха" }} />
        <Stack.Screen name="activity/[id]" options={{ title: "Об идее" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
