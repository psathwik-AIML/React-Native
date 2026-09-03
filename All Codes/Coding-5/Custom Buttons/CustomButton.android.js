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
        backgroundColor: "orange",
      }}
    >
      <Text style={{ color: "red", fontSize: 24 }}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
