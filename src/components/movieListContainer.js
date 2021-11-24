import React from "react";
import PropTypes from "prop-types";

import MovieListComponent from "./movieListComponent";
import MovieSorterComponent from "./movieSorterComponent";

function MovieListContainer(props) {
  const { movies, onGetMovieInfo, onEdit, onDelete } = props;
  return (
    <div className="background">
      <MovieSorterComponent />
      <MovieListComponent
        movies={movies}
        onGetMovieInfo={onGetMovieInfo}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
}

MovieListContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  onGetMovieInfo: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MovieListContainer;
