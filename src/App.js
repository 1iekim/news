import logo from "./logo.svg";
import "./App.scss";
import { useEffect, useState } from "react";
import Button from "./component/Button/Button";
import AppController from "./component/Controller/controller";
import Article from "./component/Article/Article";
import Loader from "./component/Loader/Loader";

function App() {
  const [source, setSource] = useState({
    sources: [],
  });
  const [article, setArticle] = useState({
    articles: [],
  });
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const controller = new AppController();

  let buttons = [];
  let news = [];

  useEffect(() => {
    controller.getSources(setSource);
  }, []);

  useEffect(() => {
    controller.getSources(setSource);
  }, [source]);

  const HandletClick = async (btnId = "") => {
    setIsFirstLoad(false);
    setArticle({ articles: [] });
    await controller.getNews(setArticle, btnId);
  };

  if (source.sources) {
    buttons = source.sources.map((source) => (
      <Button
        key={source.id}
        id={source.id}
        onClick={() => HandletClick(source.id)}
      >
        {source.name}
      </Button>
    ));
  }

  if (article.articles) {
    news = article.articles.map((article, i) => (
      <Article
        className={`${i % 2 ? "article" : "article reverse"}`}
        key={article.title + i}
        title={article.title}
        source={article.source.name}
        description={article.description}
        url={article.url}
        urlToImage={article.urlToImage}
        date={article.publishedAt}
        author={article.author}
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
          {!article.articles.length && isFirstLoad ? (
            <p className="section-article-text">Choose a source</p>
          ) : !article.articles.length && !isFirstLoad ? (
            <Loader />
          ) : (
            news
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
