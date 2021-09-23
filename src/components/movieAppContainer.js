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
      isAddPopupOpened: false,
      isMovieInfoOpened: false,
      isDefaultHeaderOpened: true,
      movieId: 0,
    };
  }

  componentDidMount() {
    this.handleGetFilms();
  }

  handleToggleAddPopup = () => {
    this.setState((state) => {
      return {
        isAddPopupOpened: !state.isAddPopupOpened,
      };
    });
  };

  handleGetFilms = () => {
    this.setState({
      films: MovieService.getAllMovies(),
    });
  };

  handleSearch = () => {
    this.setState({
      films: [],
    });
  };

  handleAdd = () => {
    this.handleToggleAddPopup();
  };

  handleToggleInfoHeader = () => {
    this.toggleHeader();
  };

  toggleHeader = () => {
    this.setState((state) => {
      return {
        isDefaultHeaderOpened: !state.isDefaultHeaderOpened,
        isMovieInfoOpened: !state.isMovieInfoOpened,
      };
    });
  };

  render() {
    const {
      isMovieInfoOpened,
      movieId,
      isDefaultHeaderOpened,
      isAddPopupOpened,
      films,
    } = this.state;
    return (
      <>
        {isMovieInfoOpened && (
          <MovieInfoHeader
            id={movieId}
            onOpenSearch={this.handleToggleInfoHeader}
          ></MovieInfoHeader>
        )}

        {isDefaultHeaderOpened && (
          <HeaderComponent
            onOpen={this.handleToggleAddPopup}
            onSearch={this.handleSearch}
          />
        )}
        <MovieListContainer
          onGetFilms={this.handleGetFilms}
          items={films}
          onGetMovieInfo={this.handleToggleInfoHeader}
        />
        {isAddPopupOpened && (
          <AddPopup
            onClose={this.handleToggleAddPopup}
            onSave={this.handleAdd}
          />
        )}
      </>
    );
  }
}
export default MovieAppContainer;
