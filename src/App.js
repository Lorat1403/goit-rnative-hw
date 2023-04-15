import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import * as Font from "expo-font";
import background from "./assets/images/background.png";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
          "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
          "Roboto-BlackItalic": require("./assets/fonts/Roboto/Roboto-BlackItalic.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={background}>
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
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#f5fffa",
    fontSize: 40,
    fontFamily: "Roboto-BlackItalic",
  },
});
