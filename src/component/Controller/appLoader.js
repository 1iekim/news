import Loader from "./loader";

class AppLoader extends Loader {
  constructor() {
    super("https://api.thenewsapi.com/v1/news/", {
      api_token: "O8scel0VbSftD4nCIC8XZSPIUb4ouV6vNze3qmzz",
      language: "en",
    });
    // super("https://newsapi.org/v2/", {
    //   apiKey: "dfa81a8788d14171b50c08aa3a160256",
    // });
  }
}

export default AppLoader;
