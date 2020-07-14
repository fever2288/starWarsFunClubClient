import React from "react";
import { Text, View } from "react-native";
const Attribute = ({ attributeName, value }) => (
  <View style={styles.attributeContainer}>
    <Text style={styles.attribute}>{attributeName}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default Attribute;

const styles = {
  attributeContainer: {
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 5,
  },
  attribute: {
    fontSize: 13,
    fontWeight:'bold'
  },
  value: {
    color: "#0e9933",
    fontSize: 10,
  },
};
