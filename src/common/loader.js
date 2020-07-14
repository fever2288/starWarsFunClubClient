import React, { Component } from "react";
import { View, Animated, Text } from "react-native";
import Logo from "./../assets/images/yoda.png";
import {Language} from "./../language/language"

class Loader extends Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(0.3);
  }

  componentDidMount() {
    this.spring();
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start((event) => {
      if (event.finished) {
        this.spring();
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loaderImage}>
          <Animated.Image
            style={{
              transform: [{ scale: this.springValue }],
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            source={Logo}
          />
        </View>
          <Text style={styles.text}>{Language.loaderText}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  loaderImage: {
    borderColor: "#98139C",
    width: 120,
    height: 120,
    padding: 10,
  },
  text: {
    marginTop: 20,
    fontWeight:'bold',
    fontSize:18
  },
};

export default Loader;
