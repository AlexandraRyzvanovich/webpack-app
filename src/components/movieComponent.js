import React, { Component } from "react";
import PropTypes from "prop-types";
import "./../styles/movie.scss";

class Movie extends Component {
  propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    year: PropTypes.number,
  };
  defaultProps = {
    img: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
    name: "Lion king",
    type: "Cartoon",
    year: 1994,
  };
  render() {
    return (
      <div className="movie-wrapper">
        <img src={this.props.img}></img>
        <div className="description-wrapper">
          <div>
            <p>{this.props.name}</p>
            <p>{this.props.type}</p>
          </div>
          <div className="year">
            <p>{this.props.year}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
