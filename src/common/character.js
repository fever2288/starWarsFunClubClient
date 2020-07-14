import React from "react";
import { Text, View, Image } from "react-native";
import Logo from "./../assets/images/logo.png";
import Attribute from "./attribute";
import {Language} from "./../language/language"

const Character = ({ height, gender, mass, birthYear, name }) => (
  <View style={styles.container}>
    <View style={styles.nameContainer}>
      <Text style={styles.name}>{name}</Text>
    </View>

    <View style={styles.rowStyle}>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.image} />
      </View>

      <View style={styles.attributesContainer}>
        <Attribute attributeName={Language.gender} value={gender} />
        <Attribute attributeName={Language.birthYear} value={birthYear} />
      </View>

      <View style={styles.attributesContainer}>
        <Attribute attributeName={Language.height} value={height} />
        <Attribute attributeName={Language.weight} value={mass} />
      </View>
    </View>
  </View>
);

export default Character;
const styles = {
  container: {
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
  },
  nameContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "black",
  },
  name: {
    color: "white",
    fontSize: 16,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    margin: 10,
  },
  image: {
    height: 40,
    width: 85,
  },
  rowStyle: {
    flexDirection: "row",
  },
  attributesContainer: {
    flex: 3,
  },
};
