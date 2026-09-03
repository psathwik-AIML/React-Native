import { View, Text, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// safe area check and renders ui in safe palce avoids overlap with phone camera notches dynamic island etc ..
// react native will decide platform
const Plat = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={{ flex: 1, backgroundColor: "plum" }}>
        <Text style={{ fontSize: Platform.OS === "android" ? 100 : 20 }}>
          Coding
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Plat;
