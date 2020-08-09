import React from "react";
import "./Article.css";

const Article = ({ newsData }) => {
  const title = newsData.title.includes(newsData.source.name)
    ? newsData.title.slice(0, newsData.title.search(newsData.source.name) - 2)
    : newsData.title;

  return (
    <div className="article">
      <a href={newsData.url} target="_blank" rel="noopener noreferrer">
        <img
          src={newsData.urlToImage}
          style={{ width: "100%" }}
          alt={newsData.title}
        />

        <div className="article-text">
          <p className="article-news-source">{newsData.source.name}</p>
          <p className="article-news-text">{title}</p>
        </div>
        <div className="modal">
          <div className="modal-content">
            <img
              src={newsData.urlToImage}
              style={{ width: "100%" }}
              alt={newsData.title}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Article;
