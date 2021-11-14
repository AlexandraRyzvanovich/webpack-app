import React from "react";
import PropTypes from "prop-types";

import MovieListComponent from "./movieListComponent";
import MovieSorterComponent from "./movieSorterComponent";

function MovieListContainer(props) {
  const {
    onGetFilmsByReleaseDate,
    onGetAllFilms,
    onGetSortedFilms,
    onSearchByGenre,
    movies,
    onGetMovieInfo,
    onEdit,
    onDelete,
  } = props;
  return (
    <div className="background">
      <MovieSorterComponent
        onGetFilmsByReleaseDate={onGetFilmsByReleaseDate}
        onGetAllFilms={onGetAllFilms}
        onGetSortedFilms={onGetSortedFilms}
        onSearchByGenre={onSearchByGenre}
      />
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
  onGetFilmsByReleaseDate: PropTypes.func.isRequired,
  onGetAllFilms: PropTypes.func.isRequired,
  onGetSortedFilms: PropTypes.func.isRequired,
  onSearchByGenre: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  onGetMovieInfo: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MovieListContainer;
