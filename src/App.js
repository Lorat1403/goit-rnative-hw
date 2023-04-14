import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import backgound from "./assets/images/background.png";

const loadApp = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (isReady) {
    return (
      <AppLoading
        startAsync={loadApp}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={backgound}>
        <Text style={styles.text}>App is working!</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6495ed",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#f5fffa",
    fontSize: 30,
    fontFamily: "Roboto-Regular",
  },
});
