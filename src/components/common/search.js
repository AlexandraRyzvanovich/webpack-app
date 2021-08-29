import React from "react";
import "./../../styles/search.scss";

function Search() {
  return (
    <div className="search-wrapper">
      <input placeholder="What do you want to watch?" type="input"></input>
      <button type="submit" className="button-search">
        <p>SEARCH</p>
      </button>
    </div>
  );
}
export default Search;
