import React from "react";
import { Text, View, Image } from "react-native";
import { getImageForStatusMessages } from "./../helper/helperFunctions";

const StatusMessage = ({ value, textStyle, text }) => (
  <View style={styles.container}>
    <Image source={getImageForStatusMessages(value)} style={styles.image} />
    <Text style={textStyle}>{text}</Text>
  </View>
);

export default StatusMessage;

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    textAlign: "justify",
  },
  image: {
    width: 200,
    height: 200,
  },
};
