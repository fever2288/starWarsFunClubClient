import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { LOCALHOST, PORT } from "./../../config";
import Loader from "./../common/loader";
import StatusMessage from "./../common/statusMessage";
import { Messages } from "./../helper/constants";
import Character from "./../common/character";

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
          this.setState({ characters: response.data.body });
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

  renderCharacters = () => {
    const { characters } = this.state;
    return characters.map((character) => {
      const { height, gender, mass, birth_year, name } = character;
      return (
        <Character
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
    const { loading, error, title } = this.state;
    return (
      <View style={styles.container}>
        {!loading && (
          <View style={styles.scroll}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              {this.renderCharacters()}
            </ScrollView>
          </View>
        )}
        <View style={styles.innerContainer}>
          {error && (
            <StatusMessage
              value={Messages.ERROR}
              text="We are having problem connecting to mothership. Please try again later"
              textStyle={styles.text}
            />
          )}
          {loading && <Loader />}
        </View>
      </View>
    );
  }
}

const styles = {
  text: {
    color: "#000000",
    textAlign: "center",
    fontFamily: "Starjedi",
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
    fontFamily: "Starjedi",
    marginBottom: 10,
  },
  scroll: {
    marginBottom: 30,
  },
};
