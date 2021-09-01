import React, { Component } from "react";
import MovieService from "../service/movieService";
import MovieList from "./movieList";
import MovieSorter from "./movieSorter";
import Movie from "./movieComponent";

class MovieListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.handleGetFilms = this.handleGetFilms.bind(this);
  }

  handleGetFilms = () => {
    const films = MovieService.getAllMovies();
    let componentList = this.getList(films);
    this.setState({
      items: componentList,
    });
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
        <MovieSorter onGetFilms={this.handleGetFilms} />
        <MovieList items={this.state.items} />
      </>
    );
  }
}
export default MovieListContainer;
