import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import backgound from "./assets/images/background.png";

export default function App() {
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
  },
});
