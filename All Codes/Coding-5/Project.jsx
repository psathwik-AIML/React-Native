import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "../../components/PokemonCard";
import charmanderImage from "../../assets/charmander.png";
import pikachuImage from "../../assets/pikachu.png";
import squirtleImage from "../../assets/squirtle.png";
import bulbasaurImage from "../../assets/bulb.png";

const Project = () => {
  // charmander
  const charmander = {
    name: "charmandar",
    type: "Fire",
    image: charmanderImage,
    hp: 30,
  };
  // charmander
  const bulbasaur = {
    name: "bulbasaur",
    type: "water",
    image: bulbasaurImage,
    hp: 10,
  };
  // charmander
  const squirtle = {
    name: "squirtle",
    type: "air",
    image: squirtleImage,
    hp: 70,
  };
  // charmander
  const pikachu = {
    name: "pikachu",
    type: "Fire",
    image: pikachuImage,
    hp: 30,
  };
  //   styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#cdcdcd",
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmander} />
        <PokemonCard {...squirtle} />
        <PokemonCard {...bulbasaur} />
        <PokemonCard {...pikachu} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Project;
