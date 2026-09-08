import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SwitchComponent = () => {
  const [isDark, setIsDark] = useState(true);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: isDark ? "#111" : "#eee",
    },
    switchComp: {
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    text: {
      color: isDark ? "#fff" : "#111",
      fontSize: 20,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>SwitchComponent</Text>
      <View style={styles.switchComp}>
        <Text style={styles.text}>{isDark ? "Dark Mode" : "Light Mode"}</Text>
        <Switch
          value={isDark}
          onValueChange={() => setIsDark(!isDark)}
          trackColor={{ false: "black", true: "red" }}
          thumbColor={"red"}
        />
      </View>
    </SafeAreaView>
  );
};

export default SwitchComponent;
