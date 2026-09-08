import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          value={username}
          onChangeText={() => setUsername()}
        />
        <Text style={styles.label} value={username}>
          Password:
        </Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Enter Username"
          value={password}
          onChangeText={() => setpassword()}
        />
        <Button title="Login" />
      </View>
    </View>
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
});
export default LoginForm;
