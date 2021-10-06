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
        onEdit={props.onEdit}
        onDelete={props.onDelete}
      />
    </div>
  );
}

MovieListContainer.propTypes = {
  onGetFilms: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  onGetMovieInfo: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MovieListContainer;
