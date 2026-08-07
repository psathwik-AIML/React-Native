import { View, Text, StyleSheet } from "react-native";
import Box from "../../components/Box";
export default function AbsoluteAndRelative() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "orange" }}>Box 1</Box>
      <Box style={{ backgroundColor: "purple", left: 100 }}>Box 2</Box>
      <Box style={{ backgroundColor: "grey" }}>Box 3</Box>
      <Box
        style={{ backgroundColor: "brown", position: "absolute", left: 100 }}
      >
        Box 4
      </Box>
      <Box style={{ backgroundColor: "blue" }}>Box 5</Box>
      <Box style={{ backgroundColor: "black" }}>Box 6</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c5b1a4",
    flex: 1,
    alignItems: "flex-start",
    paddingTop: 100,
    paddingLeft: 10,
  },
});
