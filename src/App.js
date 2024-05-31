import "./App.scss";
import { useEffect, useState } from "react";
import Button from "./component/Button/Button";
import AppController from "./component/Controller/controller";
import Article from "./component/Article/Article";
import Loader from "./component/Loader/Loader";
import Pagination from "./component/Pagination/Pagination";

function App() {
  const [source, setSource] = useState({
    data: [],
  });
  const [select, setSelect] = useState(1);
  const [article, setArticle] = useState({
    meta: {},
    data: [],
  });
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [selectSource, setSelectSource] = useState("");

  const controller = new AppController();

  let buttons = [];
  let news = [];

  useEffect(() => {
    controller.getSources(setSource);
  }, []);

  const HandletClick = async (btnId = "") => {
    setSelectSource(btnId);
    setIsFirstLoad(false);
    setSelect(1);
    setArticle({ ...article, data: [] });
    await controller.getNews(setArticle, btnId);
  };

  const HandletClickPage = async (page) => {
    setArticle({ ...article, data: [] });
    await controller.getNews(setArticle, selectSource, page);
  };

  if (source.data) {
    buttons = source.data.map((source) => (
      <Button
        key={source.source_id}
        id={source.source_id}
        onClick={() => HandletClick(source.source_id)}
      >
        {source.domain}
      </Button>
    ));
  }

  if (article.data) {
    news = article.data.map((article, i) => (
      <Article
        className={`${i % 2 ? "article" : "article reverse"}`}
        key={article.uuid}
        title={article.title}
        source={article.source}
        description={article.description}
        url={article.url}
        urlToImage={article.image_url}
        date={article.published_at}
        author={article.source}
      />
    ));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>News API</h1>
      </header>
      <main className="App-main">
        <section className="section section-source">
          <p>Wich source you want to read?</p>
          <div className="section-source-btn">{buttons}</div>
        </section>
        <section className="section section-article">
          {!article.data.length && isFirstLoad ? (
            <p className="section-article-text">Choose a source</p>
          ) : !article.data.length && !isFirstLoad ? (
            <Loader />
          ) : (
            news
          )}
        </section>
        <section className="App-pagination">
          {!article.data.length ? (
            <span></span>
          ) : (
            <Pagination
              data={article.meta}
              handler={HandletClickPage}
              select={select}
              setSelect={setSelect}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
