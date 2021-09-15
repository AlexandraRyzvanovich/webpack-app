import React, { Component } from "react";
import "./../styles/movieList.scss";
import { Fragment } from "react";
import MovieComponent from "./movieComponent";

class MovieListComponent extends Component {
  renderMovieList = () => {
    let list = [];
    let movie;
    this.props.items.forEach((item, index) => {
      movie = (
        <MovieComponent
          img={item.img}
          name={item.name}
          type={item.type}
          year={item.year}
          key={index + ""}
          //onOpenInfo={this.handleMovieOpen}
        />
      );
      list.push(movie);
    });
    return list;
  };
  render() {
    return (
      <Fragment>
        <p className="list-size-text">{this.props.items.length} MOVIES FOUND</p>
        <div className="list-wrapper">{this.renderMovieList()}</div>
      </Fragment>
    );
  }
}

export default MovieListComponent;
