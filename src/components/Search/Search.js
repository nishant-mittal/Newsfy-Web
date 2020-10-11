import React, { useState } from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import "./Search.css";

const Search = ({ setSearchTerm, setRenderNews }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    //history.push(`/${term}`);
    setSearchTerm(term);
    history.push("/search");
  };

  return (
    <div className="input-container">
      <div className="search" onSubmit={onFormSubmit}>
        <form>
          <input
            type="text"
            placeholder="Search for news..."
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </form>
        <Link to="/article">
          <i
            className="fas fa-search"
            onClick={onFormSubmit}
            style={{ cursor: "pointer" }}
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default Search;
