import { Messages } from "./constants";
export const getImageForStatusMessages = (message) => {
  switch (message) {
    case Messages.ERROR:
      return require("./../assets/images/error.png");
    case Messages.EMPTY:
      return require("./../assets/images/empty.png");
    default:
      return require("./../assets/images/error.png");
  }
};

export const avatarImageForTheMovie = (episode) => {
  switch (episode) {
    case 1:
      return require("./../assets/images/movie_1.jpg");
    case 2:
      return require("./../assets/images/movie_2.jpg");
    case 3:
      return require("./../assets/images/movie_3.jpg");
    case 4:
      return require("./../assets/images/movie_4.jpg");
    case 5:
      return require("./../assets/images/movie_5.jpg");
    case 6:
      return require("./../assets/images/movie_6.jpg");
    default:
      return require("./../assets/images/logo.png");
  }
};
