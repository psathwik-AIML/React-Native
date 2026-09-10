import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/HomeScreen";
import AboutScreen from "../../Screens/AboutScreen";
// instance for stack navigation
const Stack = createNativeStackNavigator();
// options prop in screen is added to style header
// this options props is dedicated for each screen
// if u want all same screen options use screen options prop in screen navigator
const OptionsProp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "welcome Home Page",
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "gold",
          headerRight: () => (
            <Pressable onPress={() => alert("menu")}>
              <Text style={{ color: "#fff" }}>Menu</Text>
            </Pressable>
          ),
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerStyle: { backgroundColor: "skyblue" },
            headerTintColor: "red",
            headerTitleStyle: { fontSize: 20, color: "blue" },
            contentStyle: { backgroundColor: "orange" },
          }}
        />
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
export default OptionsProp;
