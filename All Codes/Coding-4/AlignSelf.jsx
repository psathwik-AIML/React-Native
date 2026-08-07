import { View, Text, StyleSheet } from "react-native";
import Box from "../../components/Box";
export default function AlignSelf() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "orange" }}>Box 1</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 2</Box>
      <Box style={{ backgroundColor: "red", alignSelf: "center" }}>Box 3</Box>
      <Box style={{ backgroundColor: "green", alignSelf: "flex-start" }}>
        Box 4
      </Box>
      <Box style={{ backgroundColor: "blue", alignSelf: "flex-end" }}>
        Box 5
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c5b1a4",
    flex: 1,
  },
});
