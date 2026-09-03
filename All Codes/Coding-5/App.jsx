import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "./Custom Buttons/CustomButton";
// safe area check and renders ui in safe palce avoids overlap with phone camera notches dynamic island etc ..
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "plum", padding: 30 }}>
      <View style={{ flex: 1, backgroundColor: "plum" }}>
        <Text>Coding</Text>
        <CustomButton title={"click me"} press={() => console.log("pressed")} />
      </View>
    </SafeAreaView>
  );
};
export default App;
