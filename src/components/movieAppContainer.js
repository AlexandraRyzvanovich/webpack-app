import React, { Component } from "react";
import MovieService from "../service/movieService";

import AddPopup from "./addPopup";
import HeaderComponent from "./headerComponent";
import MovieListContainer from "./movieListContainer";
import MovieInfoHeader from "./movieInfoHeader";

class MovieAppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      isOpened: false,
      isMovieInfoOpened: false,
      isDefaultHeaderOpened: true,
      movieId: 0,
    };
  }

  componentDidMount() {
    this.handleGetFilms();
  }

  togglePopup = () => {
    let state = this.state.isOpened;

    this.setState({
      isOpened: !state,
    });
    // this.setState((state) => {
    //   return {
    //     isOpened: !state.isOpened,
    //   };
    // });
  };

  handleGetFilms = () => {
    const items = MovieService.getAllMovies();
    this.setState({
      films: items,
    });
  };

  handleSearch = () => {
    this.setState({
      items: [],
    });
  };

  handleAdd = () => {
    this.togglePopup();
  };

  handleOpenHeader = () => {
    this.toggleHeader();
  };

  handleOpenHeader = (id) => {
    this.setState({
      movieId: id,
    });
    this.toggleHeader();
  };

  toggleHeader = () => {
    let isDefaultHeaderOpened = this.state.isDefaultHeaderOpened;
    let isMovieInfoOpened = this.state.isMovieInfoOpened;
    this.setState({
      isDefaultHeaderOpened: !isDefaultHeaderOpened,
      isMovieInfoOpened: !isMovieInfoOpened,
    });
  };

  render() {
    return (
      <>
        {this.state.isMovieInfoOpened && (
          <MovieInfoHeader
            id={this.state.movieId}
            onOpenSearch={this.handleOpenHeader}
          ></MovieInfoHeader>
        )}

        {this.state.isDefaultHeaderOpened && (
          <HeaderComponent
            onOpen={this.togglePopup}
            onSearch={this.handleSearch}
          />
        )}
        <MovieListContainer
          onGetFilms={this.handleGetFilms}
          items={this.state.films}
          onGetMovieInfo={this.handleOpenHeader}
        />
        <AddPopup
          isOpened={this.state.isOpened}
          onClose={this.togglePopup}
          onSave={this.handleAdd}
        />
      </>
    );
  }
}
export default MovieAppContainer;
