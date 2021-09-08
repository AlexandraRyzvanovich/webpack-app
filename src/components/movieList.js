import React, { Component } from "react";
import "./../styles/movieList.scss";
import { Fragment } from "react";
import PropTypes from "prop-types";

class MovieList extends Component {
  render() {
    return (
      <Fragment>
        <p className="list-size-text">{this.props.items.length} MOVIES FOUND</p>
        <div className="list-wrapper">{this.props.items}</div>
      </Fragment>
    );
  }
}
export default MovieList;

MovieList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
