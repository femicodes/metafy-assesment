import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Navigation from "src/navigation";
import fontList from "src/utils/fontList";
import { Colors } from "src/style";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontLoaded] = useFonts(fontList);

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [fontLoaded]);

  if (!fontLoaded)
    return <View style={{ flex: 1, backgroundColor: Colors.BLACK }} />;

  return (
    <>
      <StatusBar style='light' />
      <Navigation />
    </>
  );
};

export default App;
