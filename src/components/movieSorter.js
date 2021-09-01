import React from "react";
import { Component } from "react";
import "./../styles/movieListHeader.scss";
import PropTypes from "prop-types";

class MovieSorter extends Component {
  render() {
    return (
      <div class="list-header">
        <div className="buttons-left-wrapper ">
          <button id="all" name="all" onClick={this.props.onGetFilms}>
            <p>ALL</p>
          </button>
          <button type="button" onClick={this.props.onGetFilms}>
            <p>DOCUMENTARY</p>
          </button>
          <button type="button" onClick={this.props.onGetFilms}>
            <p>COMEDY</p>
          </button>
        </div>
        <div className="buttons-rigth-wrapper">
          <button type="button" onClick={this.props.onGetFilms}>
            <p>SORT BY</p>
          </button>
          <button type="button" onClick={this.props.onGetFilms}>
            <p>RELEASE DATE</p>
          </button>
        </div>
      </div>
    );
  }
}
export default MovieSorter;

MovieSorter.propTypes = {
  onGetFilms: PropTypes.func,
};
