import React, { Component } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { LOCALHOST, PORT } from "./../../config";
import Loader from "./../common/loader";
import StatusMessage from "./../common/statusMessage";
import { Messages } from "./../helper/constants";
import Character from "./../common/character";
import Button from "./../common/button";
import {Language} from "./../language/language"

const axios = require("axios");

export default class Characters extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      error: false,
      loading: true,
      characters: [],
    };
  }

  async componentDidMount() {
    const { title } = this.props.route.params;
    this.setState({ title });
    this.getCharacters(title);
  }

  getCharacters = async (title) => {
    try {
      const path = `http://${LOCALHOST}:${PORT}/api/v1/starWars/charactersForMovie/?title=${title}`;
      await axios
        .get(path)
        .then((response) => {
          this.setState({ characters: response.data.body }, () =>
            this.sort(Messages.MAX)
          );
          this.setState({ loading: false });
        })
        .catch((error) => {
          this.setState({ error: true });
          this.setState({ loading: false });
        });
    } catch (error) {
      this.setState({ error: true });
      this.setState({ loading: false });
    }
  };

  sort = (criteria) => {
    this.setState({ loading: true });
    const { characters } = this.state;
    this.setState({ sort: criteria });
    let sorted = [];
    switch (criteria) {
      case Messages.MIN:
        sorted = characters.sort((a, b) => Number(a.height) - Number(b.height));
        break;
      case Messages.MAX:
        sorted = characters.sort((b, a) => Number(a.height) - Number(b.height));
    }
    this.setState({ characters: sorted });
    this.setState({ loading: false });
  };

  renderCharacters = () => {
    const { characters } = this.state;
    return characters.map((character) => {
      const { height, gender, mass, birth_year, name } = character;
      return (
        <Character
          key={name}
          height={height}
          gender={gender}
          mass={mass}
          birthYear={birth_year}
          name={name}
        />
      );
    });
  };

  render() {
    const { loading, error, title, sort } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {!loading && !error && (
          <View style={styles.scroll}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.sortContainer}>
              <Button
                text={Language.hightAsc}
                containerStyle={styles.button}
                textStyle={styles.buttonText}
                onPress={() => this.sort(Messages.MIN)}
                disabled={sort === Messages.MIN}
                disabledStyle={styles.buttonDisabled}
              />
              <Button
                text={Language.hightDesc}
                containerStyle={styles.button}
                textStyle={styles.buttonText}
                onPress={() => this.sort(Messages.MAX)}
                disabled={sort === Messages.MAX}
                disabledStyle={styles.buttonDisabled}
              />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {this.renderCharacters()}
            </ScrollView>
          </View>
        )}
        <View style={styles.innerContainer}>
          {error && (
            <StatusMessage
              value={Messages.ERROR}
              text={Language.errorMessage}
              textStyle={styles.text}
            />
          )}
          {loading && <Loader />}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  text: {
    color: "#000000",
    textAlign: "center",
    fontWeight:'bold'
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    fontWeight:'bold'
  },
  scroll: {
    marginBottom: 90,
  },
  button: {
    height: 55,
    width: 120,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight:'bold'
  },
  sortContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
};
