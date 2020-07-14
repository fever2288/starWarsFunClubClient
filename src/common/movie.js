import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
const Movie = ({ episode_id, onPress, avatar, title }) => (
  <View>
    <TouchableOpacity onPress={onPress} style={styles.movieContainer}>
      <Image source={avatar} style={styles.imageStyle} />
      <View style={styles.titleStyle}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default Movie;

const styles = {
  movieContainer: {
    borderWidth: 3,
    borderColor: "black",
    padding: 10,
    margin: 10,
    flexDirection: "row",
  },
  imageStyle: { height: 120, width: 80, marginRight: 20 },
  titleStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  titleText: {
    fontWeight:'bold',
    fontSize:18
  },
};
