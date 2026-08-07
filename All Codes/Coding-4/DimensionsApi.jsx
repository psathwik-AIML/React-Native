import { View, Text, StyleSheet, Dimensions } from "react-native";
// in order to make our app responsive to each device we use dynamic styles
// dimensions take screen or window
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function DimensionsApi() {
  // console.log(width, height);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Dimensions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "skyblue",
    width: windowWidth > 300 ? "70%" : "90%",
    height: windowHeight > 600 ? "70%" : "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: windowWidth > 400 ? 40 : 28,
  },
});
