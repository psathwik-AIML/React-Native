import { View, Text, Button } from "react-native";
import React from "react";

const DashboardScreen = ({ navigation }) => {
  return (
    <View>
      <Text>DashboardScreen</Text>
      <Button
        title="toggle sidebar"
        onPress={() => navigation.jumpTo("Home")}
      />
    </View>
  );
};

export default DashboardScreen;
