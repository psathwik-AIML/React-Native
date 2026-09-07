import { View, Text, StyleSheet, SectionList } from "react-native";
import React from "react";
import data from "./group-data.json";
import { SafeAreaView } from "react-native-safe-area-context";
const Section = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        ItemSeparatorComponent={() => <View style={{ height: 3 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 20 }} />}
        renderSectionHeader={({ section }) => {
          return <Text style={styles.section}>{section.type}</Text>;
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{item}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 15,
    boxShadow: "0px 3px 10px rgba(0,0,0,0.2)",
    backgroundColor: "skyblue",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  section: {
    fontSize: 35,
    fontWeight: 600,
    color: "red",
    backgroundColor: "violet",
  },
});
export default Section;
