import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const PokemonCard = ({ name, image, type, hp }) => {
  return (
    <View style={styles.card}>
      <View style={styles.box}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.type}>➡️ {type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderWidth: 2,
    padding: 16,
    margin: 16,
    borderRadius: 16,
    boxShadow: "0px 3px 10px  rgba(0,0,0,0.3)",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 20,
  },
  type: {
    color: "brown",
    fontSize: 22,
    fontWeight: 700,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
});
export default PokemonCard;
