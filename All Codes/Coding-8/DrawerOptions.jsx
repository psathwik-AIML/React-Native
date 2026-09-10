import { View, Text, StyleSheet, Button } from "react-native";
// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../../Screens/DashboardScreen";
import Home from "../../Screens/HomeScreen";
// drawer nativigation is side bars menu bars
// it comes from side
const DrawerOptions = () => {
  // console.log(navigation);
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: "Dashboard Page",
            drawerLabel: "dashboard label",
            drawerActiveTintColor: "red",
            drawerActiveBackgroundColor: "yellow",
            drawerContentStyle: { backgroundColor: "pink" },
          }}
        />
      </Drawer.Navigator>
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
    paddingVertical: 100,
    color: "brown",
    fontWeight: 600,
  },
});
export default DrawerOptions;
