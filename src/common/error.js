import React from "react";
import { Text, View, Image } from "react-native";

const Error = ({ text, textStyle }) => (
  <View style={styles.container}>
    <Image
      source={require("./../assets/images/error.png")}
      style={styles.image}
    />
    <Text style={textStyle}>{text}</Text>
  </View>
);

export default Error;

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    textAlign: "justify",
  },
  image: {
    width: 201,
    height: 200,
  },
};
