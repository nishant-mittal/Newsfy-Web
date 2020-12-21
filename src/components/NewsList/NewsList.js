import React from "react";
import News from "../News/News";

const NewsList = ({ location }) => {
  return (
    <div>
      {/* <News
        url="https://newsapi.org/v2/top-headlines?language=en"
        title="World news"
      /> */}
      <News url="https://newsfy-web.herokuapp.com/" title="World news" />
      <News
        url={`https://newsfy-web.herokuapp.com/local/${location}`}
        title="Local news"
      />
      {/* <News
        url={`https://newsapi.org/v2/top-headlines?country=${location}`}
        title="Local news"
      /> */}
    </div>
  );
};

export default NewsList;
