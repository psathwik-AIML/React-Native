import { View, Text, StyleSheet, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const AboutScreen = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title: "super page" });
  }, []);
  const { peru } = route.params;
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <Text style={styles.text}>Welcome {peru}</Text>
      <Button
        title="go home"
        onPress={() => nav.navigate("Home", { peru: "iam home" })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 30,
    paddingVertical: 100,
    color: "brown",
    fontWeight: 600,
  },
});
export default AboutScreen;
