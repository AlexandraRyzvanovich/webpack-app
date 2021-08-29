import React from "react";
import { Component } from "react";
import { Fragment } from "react";
import MovieService from "../service/movieService";
import "./../styles/movieListHeader.scss";
import MovieList from "./movieList";

class MovieSorter extends Component {
  getAllMovies() {
    var list = MovieService.getAllMovies;
    <MovieList list={list} />;
  }
  render() {
    return (
      <Fragment>
        <div className="list-header">
          <div className="buttons-left-wrapper ">
            <button type="button" onClick={this.getAllMovies()}>
              <p>ALL</p>
            </button>
            <button>
              <p>DOCUMENTARY</p>
            </button>
            <button>
              <p>COMEDY</p>
            </button>
          </div>
          <div className="buttons-rigth-wrapper">
            <button>
              <p>SORT BY</p>
            </button>
            <button>
              <p>RELEASE DATE</p>
            </button>
          </div>
        </div>
        <div className="line" />
      </Fragment>
    );
  }
}
export default MovieSorter;
