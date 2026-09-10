import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const HomeScreen = ({ navigation }) => {
  // console.log(navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="go to about"
        onPress={() => navigation.navigate("About", { peru: "iam about" })}
      />
    </View>
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
export default HomeScreen;
