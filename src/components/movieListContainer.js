import React from "react";
import PropTypes from "prop-types";

import MovieListComponent from "./movieListComponent";
import MovieSorterComponent from "./movieSorterComponent";

function MovieListContainer(props) {
  return (
    <div className="background">
      <MovieSorterComponent onGetFilms={props.onGetFilms} />
      <MovieListComponent
        items={props.items}
        onGetMovieInfo={props.onGetMovieInfo}
      />
    </div>
  );
}

MovieListContainer.propTypes = {
  onGetFilms: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  onGetMovieInfo: PropTypes.func.isRequired,
};

export default MovieListContainer;
