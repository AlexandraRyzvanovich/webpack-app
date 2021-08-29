import React, { Component } from "react";
import "./../styles/movieList.scss";
import { Fragment } from "react";
import PropTypes from "prop-types";
import MovieService from "../service/movieService";

class MovieList extends Component {
  static propTypes = {
    list: PropTypes.any,
  };

  movies = {
    size: 0,
    items: [],
  };
  getDefaultList() {
    return MovieService.getAllMovies();
  }

  render() {
    return (
      <Fragment>
        <p className="list-size-text">
          {this.propTypes?.list?.size || this.getDefaultList().size} MOVIES
          FOUND
        </p>
        <div className="list-wrapper">
          {this.propTypes?.list?.items || this.getDefaultList().items}
        </div>
        ;
      </Fragment>
    );
  }
}
export default MovieList;
