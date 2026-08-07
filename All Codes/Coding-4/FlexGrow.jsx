import { View, Text, StyleSheet } from "react-native";
import Box from "../../components/Box";
export default function FlexGrow() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "orange", flexGrow: 8 }}>Box 1</Box>
      <Box style={{ backgroundColor: "purple", flexGrow: 3 }}>Box 2</Box>
      <Box style={{ backgroundColor: "grey" }}>Box 3</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c5b1a4",
    flex: 1,
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 10,
  },
});
