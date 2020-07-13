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
