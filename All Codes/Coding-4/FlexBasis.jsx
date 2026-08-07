import { View, Text, StyleSheet } from "react-native";
import Box from "../../components/Box";
export default function FlexBasis() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "orange" }}>Box 1</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 2</Box>
      <Box style={{ backgroundColor: "grey" }}>Box 3</Box>
      <Box style={{ backgroundColor: "green", flexBasis: 200 }}>Box 4</Box>
      <Box style={{ backgroundColor: "blue" }}>Box 5</Box>
      <Box style={{ backgroundColor: "maroon", flexBasis: 100 }}>Box 6</Box>
      <Box style={{ backgroundColor: "black" }}>Box 7</Box>
      <Box style={{ backgroundColor: "skyblue" }}>Box 8</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c5b1a4",
    flex: 1,
    borderColor: "red",
    borderWidth: 10,
  },
});
