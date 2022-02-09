import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchByTitle } from "../../store/reducers/movies/moviesActions";
import {  useParams, useHistory } from "react-router-dom";

import "./../../styles/search.scss";

function SearchComponent({ searchByTitle }) {
  const [title, setTitle] = useState("");
  const { titleParam } = useParams();
  const history = useHistory();

  useEffect(() => {
    if(titleParam) {
      handleSearchByTitle(titleParam)}
  }, []); 

  const handleOnChange = (value) => {
    setTitle(titleParam !== undefined ? titleParam : value);
  };

  const handleSearchByTitle = () => {
    searchByTitle(titleParam !== undefined ? titleParam : title);
    history.push(`/movies/search/${titleParam !== undefined ? titleParam : title}`)
  };

  return (
    <>
      <div className="search-wrapper">
        <input
          placeholder="What do you want to watch?"
          type="input"
          className="input-search"
          onChange={(e) => handleOnChange(e.target.value)}
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
