import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// safe area check and renders ui in safe palce avoids overlap with phone camera notches dynamic island etc ..
const SafeAreaViewComp = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={{ flex: 1, backgroundColor: "plum" }}>
        <Text>Coding</Text>
      </View>
    </SafeAreaView>
  );
};
export default SafeAreaViewComp;
