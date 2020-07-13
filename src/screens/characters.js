import React, { Component } from "react";
import { Text, View } from "react-native";
import { LOCALHOST, PORT } from "./../../config";
import Loader from "./../common/loader";
import StatusMessage from "./../common/statusMessage";
import { Messages } from "./../helper/constants";

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
      let path = `http://${LOCALHOST}:${PORT}/api/v1/starWars/charactersForMovie/?title=${title}`;
      this.setState({ path });
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

  render() {
    let { loading, error } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {error && (
          <StatusMessage
            value={Messages.ERROR}
            text="We are having problem connecting to mothership. Please try again later"
            textStyle={styles.text}
          />
        )}
        {loading && <Loader />}
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
};
