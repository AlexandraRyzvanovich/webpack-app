import React, { useState } from "react";
import { connect } from "react-redux";
import { useCallback } from "react";
import { searchByTitle } from "../../store/reducers/movies/moviesActions";

import "./../../styles/search.scss";

function SearchComponent({ searchByTitle }) {
  const [title, setTitle] = useState("");
  const hanleOnChange = (value) => {
    setTitle(value);
  };

  const handleSearchByTitle = useCallback(() => {
    searchByTitle(title);
  }, []);

  return (
    <>
      <div className="search-wrapper">
        <input
          placeholder="What do you want to watch?"
          type="input"
          className="input-search"
          onChange={(e) => hanleOnChange(e.target.value)}
        ></input>
        <button
          type="submit"
          className="button-search"
          onClick={handleSearchByTitle}
        >
          <p>SEARCH</p>
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, {
  searchByTitle,
})(SearchComponent);
