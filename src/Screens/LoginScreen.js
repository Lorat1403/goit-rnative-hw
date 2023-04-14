import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import background from "../assets/images/background.png";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [state, setState] = useState(initialState);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={background}>
        <View style={styles.form}>
          <Text style={styles.screenTitle}>Войти</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              value={state.email}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              value={state.password}
            />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.btnTitle}>Войти</Text>
          </TouchableOpacity>
        </View>
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
  form: {
    flex: 1,
    backgroundColor: "#f5fffa",
    marginHorizontal: 16,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  screenTitle: {
    fontFamily: "Roboto",
    fontStyle: normal,
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    marginBottom: 16,
    borderRadius: 8,
    color: "#f0f8ff",
    backgroundColor: "#f6f6f6",
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 40,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  btnTitle: {
    color: "#f0f8ff",
    fontSize: 16,
  },
});
