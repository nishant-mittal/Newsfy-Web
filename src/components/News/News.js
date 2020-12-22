import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleList from "../ArticleList/ArticleList";
import Loading from "../Loading/Loading";
import "./News.css";

const News = ({ url, title }) => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    axios.get(url, {}).then((res) => {
      setNewsData(res.data.articles);
    });
  }, [url]);

  return (
    <div className="news">
      <h2 style={{ margin: "0.8em 0", fontSize: "1.7rem" }}>{title}</h2>
      {newsData != null ? (
        newsData.length > 0 ? (
          <ArticleList newsData={newsData} />
        ) : (
          <Loading />
        )
      ) : (
        <p style={{ textAlign: "center" }}>Could not load news :(</p>
      )}
    </div>
  );
};

export default News;
