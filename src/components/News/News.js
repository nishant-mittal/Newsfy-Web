import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleList from "../ArticleList/ArticleList";
import "./News.css";

const News = ({ url, title }) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        // params: {
        //   apiKey: "bef75161a87c4cf199c1c342e6dbb452",
        // },
      })
      .then((res) => {
        console.log(res);
        setNewsData(res.data.articles);
        //setNewsData(res);
      });
  }, [url]);

  return newsData.length > 0 ? (
    <div className="news">
      <h2 style={{ margin: "0.8em 0",fontSize: "1.7rem" }}>{title}</h2>
      <ArticleList newsData={newsData} />
    </div>
  ) : null;
};

export default News;
