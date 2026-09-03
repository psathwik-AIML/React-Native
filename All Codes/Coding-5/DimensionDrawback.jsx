import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
// to make app dynamic even in changing orientation we use a hook called useWindowsDimensions
export default function DimensionsApi() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  console.log(windowWidth, windowHeight);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "plum",
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      backgroundColor: windowWidth < 500 ? "skyblue" : "lightgreen",
      width: windowWidth > 300 ? "70%" : "90%",
      height: windowHeight > 600 ? "70%" : "50%",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: windowWidth > 400 ? 40 : 28,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Dimensions</Text>
      </View>
    </View>
  );
}
