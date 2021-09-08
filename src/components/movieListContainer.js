import React, { Component } from "react";
import MovieList from "./movieList";
import MovieSorter from "./movieSorter";
import PropTypes from "prop-types";

class MovieListContainer extends Component {
  render() {
    return (
      <div className="background">
        <MovieSorter onGetFilms={this.props.onGetFilms} />
        <MovieList items={this.props.items} />
      </div>
    );
  }
}

MovieListContainer.propTypes = {
  onGetFilms: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default MovieListContainer;
