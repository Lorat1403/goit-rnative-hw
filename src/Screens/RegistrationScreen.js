import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.screenTitle}>Регистрация</Text>
      <View>
        <TextInput style={styles.input} placeholder="Логин" />
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Адрес электронной почты" />
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Пароль" />
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
        <Text style={styles.btnTitle}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginHorizontal: 20,
  },
  btnTitle: {
    color: "#f0f8ff",
    fontSize: 16,
  },
});

export default RegistrationScreen;
