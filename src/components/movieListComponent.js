import React from "react";
import PropTypes from "prop-types";

import "./../styles/movieList.scss";
import MovieComponent from "./movieComponent";

function MovieListComponent(props) {
  const { items, onGetMovieInfo } = props;
  return (
    <>
      <p className="list-size-text">{items.length} MOVIES FOUND</p>
      <div className="list-wrapper">
        {items.map((item) => (
          <MovieComponent
            img={item.img}
            name={item.name}
            type={item.type}
            year={item.year}
            onGetMovieInfo={onGetMovieInfo}
          />
        ))}
      </div>
    </>
  );
}

MovieListComponent.propTypes = {
  items: PropTypes.array.isRequired,
  onGetMovieInfo: PropTypes.func.isRequired,
};

export default MovieListComponent;
