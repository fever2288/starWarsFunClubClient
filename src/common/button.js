import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const Button = ({ text, onPress, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={containerStyle}>
        <Text style={textStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
