import React, { Component } from "react";
import MovieListComponent from "./movieListComponent";
import MovieSorterComponent from "./movieSorterComponent";
import PropTypes from "prop-types";

class MovieListContainer extends Component {
  render() {
    return (
      <div className="background">
        <MovieSorterComponent onGetFilms={this.props.onGetFilms} />
        <MovieListComponent items={this.props.items} />
      </div>
    );
  }
}

MovieListContainer.propTypes = {
  onGetFilms: PropTypes.func,
  items: PropTypes.any,
};

export default MovieListContainer;
