import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import data from "./data.json";

const FlatListCompo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.heading}>
                {item.id} - {item.name}
              </Text>
              <Text style={styles.text}>{item.type}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  card: {
    margin: 15,
    padding: 15,
    boxShadow: "0px 2px 10px rgba(0,0,0,0.3)",
    borderRadius: 18,
    backgroundColor: "#f2f2f2",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    color: "#6357ea",
    fontWeight: 500,
  },
});

export default FlatListCompo;
