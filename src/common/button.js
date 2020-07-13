import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
const Button = ({
  text,
  onPress,
  containerStyle,
  textStyle,
  disabled,
  disabledStyle,
}) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    <View style={disabled ? [containerStyle, disabledStyle] : containerStyle}>
      <Text style={textStyle}> {text} </Text>
    </View>
  </TouchableOpacity>
);

export default Button;
