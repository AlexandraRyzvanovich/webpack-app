import React, { Component } from "react";
import MovieService from "../service/movieService";

import AddPopup from "./addPopup";
import Header from "./header";
import Movie from "./movieComponent";
import MovieListContainer from "./movieListContainer";

class MovieAppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isOpened: false,
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
    const films = MovieService.getAllMovies();
    let componentList = this.getList(films);
    this.setState({
      items: componentList,
    });
  };

  handleSearch = (name) => {
    this.setState({
      items: [],
    });
  };

  handleAdd = () => {
    this.handleGetFilms();
  };

  getList(moviesList) {
    let list = [];
    let movie;
    moviesList.forEach((item, index) => {
      movie = (
        <Movie
          img={item.img}
          name={item.name}
          type={item.type}
          year={item.year}
          key={index + ""}
        />
      );
      list.push(movie);
    });
    return list;
  }

  render() {
    return (
      <>
        <Header onOpen={this.togglePopup} onSearch={this.handleSearch} />
        <MovieListContainer
          onGetFilms={this.handleGetFilms}
          items={this.state.items}
        />
        <AddPopup isOpened={this.state.isOpened} onClose={this.togglePopup} />
      </>
    );
  }
}
export default MovieAppContainer;
