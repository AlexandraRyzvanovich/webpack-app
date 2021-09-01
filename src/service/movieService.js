import React from "react";
import { Component } from "react";
import Movie from "../components/movieComponent.js";

class MovieService extends Component {
  static getAllMovies = () => {
    debugger;
    let moviesList = [];
    moviesList.push({
      img: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
      name: "Lion King",
      type: "Cartoon",
      year: 1994,
    });
    moviesList.push({
      img: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
      name: "Lion King",
      type: "Cartoon",
      year: 1994,
    });
    moviesList.push({
      img: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
      name: "Lion King",
      type: "Cartoon",
      year: 1994,
    });
    moviesList.push({
      img: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
      name: "Lion King",
      type: "Cartoon",
      year: 1994,
    });
    moviesList.push({
      img: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
      name: "Lion King",
      type: "Cartoon",
      year: 1994,
    });
    moviesList.push({
      img: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
      name: "Lion King",
      type: "Cartoon",
      year: 1994,
    });

    return moviesList;
  };
}

export default MovieService;
