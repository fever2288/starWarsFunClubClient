import React, { Component } from "react";
import { Text, View, Image, SafeAreaView  } from "react-native";
import * as Font from "expo-font";
import Logo from "./../assets/images/logo.png";
import Button from "./../common/button";
import {Language} from "./../language/language"

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
  }

  navigateToMovies = () => {
    const { navigation } = this.props;
    navigation.navigate("Movies");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <View>
            <View style={styles.logoHeight}>
              <Image source={Logo} style={styles.logo} />
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>{Language.welcome}</Text>
              <Text style={styles.text}>{Language.force}</Text>
              <Button
                text="Enter"
                containerStyle={styles.button}
                textStyle={styles.buttonTextStyle}
                onPress={this.navigateToMovies}
                disabled={false}
              />
            </View>
          </View>
      </SafeAreaView>
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
    color: "#000000",
    textAlign: "center",
    fontWeight:'bold',
    fontSize:18
  },
  buttonTextStyle: {
    color: "#ffffff",
    fontSize: 24,
  },
};
