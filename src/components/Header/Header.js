import React from "react";
import Search from "../Search/Search";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ setSearchTerm }) => {
  return (
    <div className="header-component">
      <Link to="/">
        <h1 className="website-name">Newsfy</h1>
      </Link>
      <Search className="search-component" setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default Header;
