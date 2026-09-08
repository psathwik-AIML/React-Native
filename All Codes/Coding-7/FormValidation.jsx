import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Image,
  Platform,
} from "react-native";
import React, { useState } from "react";
const FormValidation = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [errors, setErrors] = useState({});
  //   validate form
  function validForm() {
    let errors = {};
    if (!username) errors.username = "username is required";
    if (!password) errors.password = "password is required";
    setErrors(errors);

    return Object.keys(errors).length === 0;
  }
  //   handle form
  function handleForm() {
    if (validForm()) {
      console.log("formData: ", username, password);
    }
  }
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "android" ? 0 : 100}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require("../../assets/pikachu.png")}
          style={{ width: 100, height: 100, alignSelf: "center" }}
        />
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? (
          <Text style={styles.error}>{errors.username}</Text>
        ) : null}
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Enter Username"
          value={password}
          onChangeText={setpassword}
        />
        {errors.password ? (
          <Text style={styles.error}>{errors.password}</Text>
        ) : null}
        <Button title="Login" onPress={handleForm} />
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  form: {
    boxShadow: "0px 3px 10px rgba(0,0,0,0.6)",
    padding: 20,
    borderRadius: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 18,
    marginBottom: 10,
    borderRadius: 12,
  },
  error: {
    color: "red",
  },
});
export default FormValidation;
