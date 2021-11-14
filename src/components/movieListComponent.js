import React from "react";
import PropTypes from "prop-types";

import "./../styles/movieList.scss";
import MovieComponent from "./movieComponent";

function MovieListComponent(props) {
  const { movies, onGetMovieInfo, onEdit, onDelete } = props;
  debugger;
  return (
    <>
      <p className="list-size-text">{movies.length} MOVIES FOUND</p>
      <div className="list-wrapper">
        {movies.map((movie) => (
          <MovieComponent
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            genres={movie.genres}
            release_date={movie.release_date}
            onGetMovieInfo={onGetMovieInfo}
            onEdit={() => onEdit(movie.id)}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
}

MovieListComponent.propTypes = {
  movies: PropTypes.array.isRequired,
  onGetMovieInfo: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MovieListComponent;
