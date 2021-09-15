import React, { Component } from "react";
import MovieService from "../service/movieService";

import AddPopup from "./addPopup";
import HeaderComponent from "./headerComponent";
import MovieListContainer from "./movieListContainer";

class MovieAppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      isOpened: false,
      isMovieInfoOpened: false,
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

  handleMovieOpen = () => {
    let movieOpened = this.state.isMovieInfoOpened;
    this.setState({
      isMovieInfoOpened: !movieOpened,
    });
  };

  render() {
    return (
      <>
        {/* <MovieInfoHeader
          movieUrl={"MovieUrl"}
          movieName={"name"}
          movieRating={"rating"}
          year={"1232"}
          length={152}
          description={"descr"}
          comment={"comment"}
          isOpened={false}
        ></MovieInfoHeader> */}
        <HeaderComponent
          onOpen={this.togglePopup}
          onSearch={this.handleSearch}
        />
        <MovieListContainer
          onGetFilms={this.handleGetFilms}
          items={this.state.films}
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
