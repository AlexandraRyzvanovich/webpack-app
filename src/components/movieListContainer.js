import React, { Component } from "react";
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

export default MovieListContainer;
