import { View, Text, StyleSheet } from "react-native";
import Box from "../../components/Box";
export default function AlignContent() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "orange" }}>Box 1</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 2</Box>
      <Box style={{ backgroundColor: "grey" }}>Box 3</Box>
      <Box style={{ backgroundColor: "green" }}>Box 4</Box>
      <Box style={{ backgroundColor: "blue" }}>Box 5</Box>
      <Box style={{ backgroundColor: "maroon" }}>Box 6</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c5b1a4",
    height: 300,
    borderColor: "red",
    borderWidth: 10,
    flexWrap: "wrap",
    alignContent: "space-around",
  },
});
