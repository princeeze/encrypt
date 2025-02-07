import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Encrypt" }} />
      <Tabs.Screen name="decrypt" options={{ title: "Decrypt" }} />
    </Tabs>
  );
}
