import React from "react";
import PropTypes from "prop-types";

import "./../styles/movieListHeader.scss";

function MovieSorterComponent(props) {
  const {
    onGetFilmsByReleaseDate,
    onGetAllFilms,
    onGetSortedFilms,
    onSearchByGenre,
  } = props;
  return (
    <div className="list-header">
      <div className="buttons-left-wrapper ">
        <button id="all" name="all" onClick={onGetAllFilms}>
          <p>ALL</p>
        </button>
        <button type="button" onClick={() => onSearchByGenre("documentary")}>
          <p>DOCUMENTARY</p>
        </button>
        <button type="button" onClick={() => onSearchByGenre("comedy")}>
          <p>COMEDY</p>
        </button>
      </div>
      <div className="buttons-rigth-wrapper">
        <button
          type="button"
          onClick={() => {
            onGetSortedFilms("title");
          }}
        >
          <p>SORT BY</p>
        </button>
        <button type="button" onClick={onGetFilmsByReleaseDate}>
          <p>RELEASE DATE</p>
        </button>
      </div>
    </div>
  );
}

MovieSorterComponent.propTypes = {
  onGetFilmsByReleaseDate: PropTypes.func.isRequired,
  onGetAllFilms: PropTypes.func.isRequired,
  onGetSortedFilms: PropTypes.func.isRequired,
  onSearchByGenre: PropTypes.func.isRequired,
};
export default MovieSorterComponent;
