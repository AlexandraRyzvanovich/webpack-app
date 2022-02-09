import React from "react";
import PropTypes from "prop-types";

import "./../styles/movieList.scss";
import MovieComponent from "./movieComponent";

function MovieListComponent(props) {
  const { movies, onGetMovieInfo, onEdit, onDelete } = props;
  return (
    <>
      <p className="list-size-text">{movies.totalAmount} MOVIES FOUND</p>
      <div className="list-wrapper">
        {movies.data.map((movie) => (
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
  movies: PropTypes.object.isRequired,
  onGetMovieInfo: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MovieListComponent;
