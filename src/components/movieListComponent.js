import React, { Component, useCallback } from "react";
import "./../styles/movieList.scss";
import { Fragment } from "react";
import MovieComponent from "./movieComponent";

function MovieListComponent(props) {
  const callback = () => {
    renderMovieList();
  };

  const deps = [props.items];

  const renderMovieList = () => {
    let list = [];
    let movie;
    props.items.forEach((item, index) => {
      movie = (
        <MovieComponent
          img={item.img}
          name={item.name}
          type={item.type}
          year={item.year}
          key={index + ""}
          onGetMovieInfo={props.onGetMovieInfo}
        />
      );
      list.push(movie);
    });
    return list;
  };

  const movies = useCallback(callback, deps);

  return (
    <Fragment>
      <p className="list-size-text">{movies.length} MOVIES FOUND</p>
      <div className="list-wrapper">{renderMovieList()}</div>
    </Fragment>
  );
}

export default MovieListComponent;
