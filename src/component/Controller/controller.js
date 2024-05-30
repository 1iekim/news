import AppLoader from "./appLoader";

class AppController extends AppLoader {
  getSources(callback) {
    super.getResp(
      {
        endpoint: "top-headlines/sources",
      },
      callback
    );
  }

  getNews(callback, btnId = "") {
    const options = {};
    if (btnId.length >= 1) {
      options.sources = btnId;
    }
    super.getResp(
      {
        endpoint: "everything",
        options: options,
      },
      callback
    );
  }
}

export default AppController;
