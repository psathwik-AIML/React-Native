import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Back from "../../Screens/Back";
import Front from "../../Screens/Front";
// import {Ionicons} from "@expo";
import { Ionicons } from "@expo/vector-icons";
const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "#ddd",
        }}
      >
        <Tab.Screen name="back" component={Back} />
        <Tab.Screen
          name="front"
          component={Front}
          options={{
            title: "front page",
            tabBarLabel: "next",
            tabBarIcon: (f) => {
              return (
                <Ionicons name="bag-check" color={f.color} size={f.size} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
