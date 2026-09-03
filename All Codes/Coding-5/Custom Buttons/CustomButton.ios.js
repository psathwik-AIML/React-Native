import { View, Text, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ press, title }) => {
  return (
    <Pressable
      onPress={press}
      style={{
        borderRadius: 20,
        borderColor: "red",
        borderWidth: 3,
        alignItems: "center",
        backgroundColor: "blue",
      }}
    >
      <Text style={{ color: "blue", fontSize: 24 }}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
