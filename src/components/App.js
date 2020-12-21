import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import NewsList from "../components/NewsList/NewsList";
import axios from "axios";
import ArticleList from "./ArticleList/ArticleList";
import Weather from "./Weather/Weather";
import useLocation from "./hooks/useLocation";
import CovidList from "./CovidList/CovidList";
import JobsList from "./JobsList/JobsList";
import Loading from "./Loading/Loading";
import { Router, Route } from "react-router-dom";
import Scroll from "./Scroll/Scroll";
import history from "../history";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [renderNews, setRenderNews] = useState(false);
  const [newsData, setNewsData] = useState({});
  const location = useLocation();

  useEffect(() => {
    //   const fetchData = async () => {
    //     const data = await axios.get(
    //       `https://newsapi.org/v2/everything?q=${searchTerm}`,
    //       {
    //         params: {
    //           apiKey: "bef75161a87c4cf199c1c342e6dbb452",
    //         },
    //       }
    //     );

    //     setNewsData(data.data.articles);

    //     setRenderNews(true);
    //   };

    //   fetchData();
    // }, [searchTerm]);

    const fetchData = async () => {
      const data = await axios.get(
        `https://newsfy-web.herokuapp.com/news/${searchTerm}`
      );

      setNewsData(data.data.articles);

      setRenderNews(true);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <Router history={history}>
      <div className="app">
        <Header setSearchTerm={setSearchTerm} />
        <div className="info-cards">
          <Weather lat={location.latitude} lon={location.longitude} />
          <CovidList location={location} />
        </div>
        <Scroll />
        <Route
          path={`/search`}
          exact
          component={() => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                width: "95vw",
              }}
            >
              <h2
                style={{ width: "95vw", color: "red", margin: "0.8em 0" }}
              >{`Results for ${searchTerm}`}</h2>
              {renderNews ? <ArticleList newsData={newsData} /> : <Loading />}
            </div>
          )}
        />

        <Route
          path="/"
          exact
          component={() => <NewsList location={location.country_code} />}
        />
        <JobsList
          country={location.country_code}
          region={location.region}
          district={location.district}
        />
        {/* <NewsList location={location.country_code} /> */}
      </div>
    </Router>
  );
};

export default App;
