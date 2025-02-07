import { Stack } from "expo-router";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    const setBar = async () => {
      await NavigationBar.setBackgroundColorAsync("#55555500");
      await NavigationBar.setPositionAsync("absolute");
    };
    setBar();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
