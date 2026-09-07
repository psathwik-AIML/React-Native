import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import data from "./data.json";

const Empty = () => {
  return (
    <View style={styles.message}>
      <Text style={{ fontSize: 40, color: "red", fontWeight: 600 }}>
        No Data Found
      </Text>
    </View>
  );
};
const HeaderFooterProp = () => {
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
        ListEmptyComponent={Empty}
        ListHeaderComponent={<Text style={styles.header}>Pokemon Data</Text>}
        ListFooterComponent={<Text style={styles.footer}>End of Data</Text>}
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
  message: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 26,
    fontWeight: 600,
    color: "orange",
    textAlign: "center",
  },
  footer: {
    fontSize: 26,
    fontWeight: 600,
    color: "green",
    textAlign: "center",
  },
});

export default HeaderFooterProp;
