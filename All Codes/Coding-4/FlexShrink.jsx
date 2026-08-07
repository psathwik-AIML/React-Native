import { View, Text, StyleSheet } from "react-native";
import Box from "../../components/Box";
export default function FlexShrink() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "orange" }}>Box 1</Box>
      <Box style={{ backgroundColor: "purple", flexShrink: 2 }}>Box 2</Box>
      <Box style={{ backgroundColor: "grey" }}>Box 3</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c5b1a4",
    flex: 1,
    width: 240,
    flexDirection: "row",
    borderColor: "red",
    alignItems: "center",
    borderWidth: 10,
  },
});
