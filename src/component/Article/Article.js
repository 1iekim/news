import "./Article-module.scss";

const Article = ({ title, description, source, url, urlToImage, date, author, ...props}) => {
  const time = new Date(date);

  const timeStr = `${time.getMonth()}.${time.getDay()}.${time.getFullYear()}`

  return (
    <div {...props}>
      <div className="article__content">
        <h3 className="article__content__title">{title}</h3>
        <span className="article__content__source">{source}</span>
        <p className="article__content__text">{description}</p>
        <a className="article__content__link" href={url} target="_blank">Link</a>
      </div>
      <div className="article__img" style={{backgroundImage: `url(${urlToImage})`}}>
        {/* <img className="article__img-picture" src={urlToImage} alt={title} /> */}
      </div>
      <ul className="article__list">
          <li className="article__list__item">{author}</li>
          <li className="article__list__item">{timeStr}</li>
      </ul>
    </div>
  );
};

export default Article;
