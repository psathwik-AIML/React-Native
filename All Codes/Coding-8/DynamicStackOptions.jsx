import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/HomeScreen";
import AboutScreen from "../../Screens/AboutScreen";
// instance for stack navigation
const Stack = createNativeStackNavigator();
// dynamic options are set by using two ways
// 1. return function in options which return same object
// 2. uselayouteffect hook
const DynamicStackOptions = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ peru: "code" }}
          options={({ route }) => {
            return { title: route.params.peru };
          }}
        />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 30,
  },
});
export default DynamicStackOptions;
