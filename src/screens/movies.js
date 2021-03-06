import React, { Component } from "react";
import {
  View,
  TextInput,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from "react-native";
import Loader from "./../common/loader";
import StatusMessage from "./../common/statusMessage";
import { Messages } from "./../helper/constants";
import Button from "./../common/button";
import Movie from "./../common/movie";
import { LOCALHOST, PORT } from "./../../config";
const axios = require("axios");
import { avatarImageForTheMovie } from "./../helper/helperFunctions";
import {Language} from "./../language/language"


export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      error: false,
      empty: false,
      searchTerm: "",
      movies: [],
    };
  }

  search = async () => {
    Keyboard.dismiss();
    this.setState({ loading: true });
    this.setState({empty:false});
    const { searchTerm } = this.state;
    try {
      const path = `http://${LOCALHOST}:${PORT}/api/v1/starWars/movies?searchTerm=${searchTerm}`;
      await axios
        .get(path)
        .then((response) => {
          this.setState({ movies: response.data.body });
          this.setState({ loading: false });
          this.setState({ error: false });
          if (response.data.body.length === 0) {
            this.setState({ empty: true });
          } else {
            this.setState({ empty: false });
          }
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

  renderMovies = () => {
    const { movies } = this.state;
    return movies.map((movie) => {
      const { title, episode_id } = movie;
      const avatar = avatarImageForTheMovie(episode_id);
      return (
        <Movie
          key = {episode_id}
          episode_id={episode_id}
          onPress={() => this.navigateToMovie(movie)}
          avatar={avatar}
          title={title}
        />
      );
    });
  };

  navigateToMovie = (movie) => {
    const { navigation } = this.props;
    navigation.navigate("Characters", {
      title: movie.title,
    });
  };

  render() {
    const { loading, error, empty, searchTerm, movies } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <TextInput
          style={styles.inputStyle}
          placeholder={Language.searchMovies}
          onChangeText={(searchTerm) => {
            this.setState({ searchTerm });
          }}
          value={searchTerm}
        />
        <Button
          text={Language.search}
          containerStyle={styles.button}
          textStyle={styles.buttonTextStyle}
          onPress={() => this.search()}
          disabled={!searchTerm}
          disabledStyle={styles.disabledButton}
        />
        </View>
        {movies.length !== 0 && !loading && (
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.renderMovies()}
          </ScrollView>
        )}
        <View style={styles.innerContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
            style={styles.container}
          >
            {empty && (
              <StatusMessage
                value={Messages.EMPTY}
                text={Language.emptyMessage}
                textStyle={styles.text}
              />
            )}
            {error && (
              <StatusMessage
                value={Messages.ERROR}
                text={Language.errorMessage}
                textStyle={styles.text}
              />
            )}
            {loading && <Loader />}
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  text: {
    color: "#000000",
    textAlign: "center",
    fontWeight:'bold',
    fontSize:18
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    height: 50,
    width: 150,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    borderRadius: 6,
  },
  buttonTextStyle: {
    color: "#ffffff",
    fontSize: 24,
  },
  inputStyle: {
    height: 40,
    width: 250,
    borderColor: "black",
    borderWidth: 3,
    paddingLeft: 10,
  },
  disabledButton: {
    opacity: 0.4,
  },
  header: {
    justifyContent:'center',
    alignItems:'center'
  }
};
