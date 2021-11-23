import React, { useState } from "react";
import PropTypes from "prop-types";

import "./../../styles/search.scss";

function SearchComponent(props) {
  const [title, setTitle] = useState("");
  return (
    <>
      <div className="search-wrapper">
        <input
          placeholder="What do you want to watch?"
          type="input"
          className="input-search"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button
          type="submit"
          className="button-search"
          onClick={() => props.onSearch(title)}
        >
          <p>SEARCH</p>
        </button>
      </div>
    </>
  );
}
SearchComponent.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchComponent;
