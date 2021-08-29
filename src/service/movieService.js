import React from "react";
import { Component } from "react";
import Movie from "./../components/movie.js";

const movies = {
  size: 0,
  items: [],
};
class MovieService {
  static getAllMovies() {
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
    debugger;
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
      movies.items.push(movie);
    });
    movies.size = this.getSizeList(moviesList);

    return movies;
  }

  getAllDocumentaryList() {
    return this.getAllMovies();
  }

  getAllComedy() {
    return this.getAllMovies();
  }

  static getSizeList(moviesList) {
    return moviesList.length;
  }
}

export default MovieService;
