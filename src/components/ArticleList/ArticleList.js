import React from "react";
import Article from "../Article/Article";
import "./ArticleList.css";

const ArticleList = ({ newsData }) => {
  const renderNews = newsData.map((news) => (
    <Article newsData={news} key={news.url} />
  ));

  return (
    <div className="article-list">
      <div className="articles">{renderNews}</div>
    </div>
  );
};

export default ArticleList;
