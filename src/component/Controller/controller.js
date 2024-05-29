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

  getNews(callback, btnId="") {
    const options = {};
    if(btnId.length >= 1) {
      options.sources = btnId;
    }
    // let target = e.target;
    // const newsContainer = e.currentTarget;

    // while (target !== newsContainer) {
    //   if (target.classList.contains("source__item")) {
    //     const sourceId = target.getAttribute("data-source-id") ?? "";
    //     if (newsContainer.getAttribute("data-source") !== sourceId) {
    //       newsContainer.setAttribute("data-source", sourceId);
          super.getResp(
            {
              endpoint: "everything",
              options: options,
            },
            callback
          );
        // }
        // return;
      // }
      // target = target.parentNode;
    // }
  }
}

export default AppController;