import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import Logo from "./../assets/images/logo.png";
import Button from "./../common/button";
import StatusMessage from "./../common/statusMessage";
import { Messages } from "./../helper/constants";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Starjedi: require("./../assets/fonts/Starjedi.ttf"),
    });
    this.setState({ fontLoaded: true });
  }

  navigateToMovies = () => {
    const { navigation } = this.props;
    navigation.navigate("Movies");
  };
  render() {
    let { fontLoaded } = this.state;
    return (
      <View style={styles.container}>
        {fontLoaded && (
          <View>
            <View style={styles.logoHeight}>
              <Image source={Logo} style={styles.logo} />
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>Welcome to star wars fun club</Text>
              <Text style={styles.text}>May the force be with you</Text>
              <Button
                text="Enter"
                containerStyle={styles.button}
                textStyle={styles.buttonTextStyle}
                onPress={this.navigateToMovies}
              />
            </View>
          </View>
        )}

        {!fontLoaded && (
          <StatusMessage
            value={Messages.ERROR}
            text="We are having problem connecting to mothership. Please try again later"
            textStyle={styles.text}
          />
        )}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  button: {
    height: 60,
    width: 150,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    borderRadius: 20,
  },
  logoHeight: {
    height: 200,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Starjedi",
    color: "#000000",
    textAlign: "center",
  },
  buttonTextStyle: {
    fontFamily: "Starjedi",
    color: "#ffffff",
    fontSize: 24,
  },
};
