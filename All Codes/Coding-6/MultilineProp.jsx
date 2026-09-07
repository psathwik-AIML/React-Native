import { View, Text, StatusBar, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const MultilineProp = () => {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text>MultilineProp</Text>
      <TextInput
        style={styles.text}
        placeholder="normal text"
        onChangeText={setName}
      />
      <TextInput style={styles.long} placeholder="long text" multiline />
      <Text style={{ fontSize: 18, fontStyle: "italic" }}>Hi, {name}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 20,
    borderWidth: 1,
    padding: 10,
    margin: 40,
  },
  long: {
    fontSize: 20,
    borderWidth: 1,
    padding: 10,
    margin: 40,
    minHeight: 100,
  },
});
export default MultilineProp;
