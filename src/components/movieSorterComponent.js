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
        <button type="button">
          <p>SORT BY</p>
        </button>
        <div className="dropdown-sort">
          <button className="dropbtnselect" onClick={onGetFilmsByReleaseDate}>
            <p> RELEASE DATE</p>
          </button>
          <div className="dropdown-content-sort">
            <p className="cursor-p" onClick={onGetFilmsByReleaseDate}>
              RELEASE DATE
            </p>
            <p
              className="cursor-p"
              onClick={() => {
                onGetSortedFilms("title");
              }}
            >
              TITLE
            </p>
          </div>
        </div>
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
