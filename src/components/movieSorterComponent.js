import React from "react";
import PropTypes from "prop-types";

import "./../styles/movieListHeader.scss";

function MovieSorterComponent(props) {
  const { onGetFilms } = props;
  return (
    <div className="list-header">
      <div className="buttons-left-wrapper ">
        <button id="all" name="all" onClick={onGetFilms}>
          <p>ALL</p>
        </button>
        <button type="button" onClick={onGetFilms}>
          <p>DOCUMENTARY</p>
        </button>
        <button type="button" onClick={onGetFilms}>
          <p>COMEDY</p>
        </button>
      </div>
      <div className="buttons-rigth-wrapper">
        <button type="button" onClick={onGetFilms}>
          <p>SORT BY</p>
        </button>
        <button type="button" onClick={onGetFilms}>
          <p>RELEASE DATE</p>
        </button>
      </div>
    </div>
  );
}

MovieSorterComponent.propTypes = {
  onGetFilms: PropTypes.func.isRequired,
};
export default MovieSorterComponent;
