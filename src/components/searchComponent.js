import React from "react";
import PropTypes from "prop-types";

import "./../styles/search.scss";

function SearchComponent(props) {
  return (
    <>
      <div className="search-wrapper">
        <input
          placeholder="What do you want to watch?"
          type="input"
          className="input-search"
        ></input>
        <button
          type="submit"
          className="button-search"
          onClick={props.onSearch}
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
