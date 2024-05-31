import AppLoader from "./appLoader";

class AppController extends AppLoader {
  getSources(callback) {
    super.getResp(
      {
        endpoint: "sources",
      },
      callback
    );
  }

  getNews(callback, btnId = "", page = "1") {
    const options = {
    };
    if (btnId.length >= 1) {
      options.source_ids = btnId;
      options.page = page;
    }
    super.getResp(
      {
        endpoint: "all",
        options: options,
      },
      callback
    );
  }
}

export default AppController;
