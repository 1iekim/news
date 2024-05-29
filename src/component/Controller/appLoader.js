import Loader from "./loader";

class AppLoader extends Loader {
  constructor() {
    super("https://newsapi.org/v2/", {
      apiKey: "dfa81a8788d14171b50c08aa3a160256",
    });
  }
}

export default AppLoader;