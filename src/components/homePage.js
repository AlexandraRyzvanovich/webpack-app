import React from "react";
import MovieList from "./movieList";
import MovieSorter from "./movieSorter";
import "./../styles/movieList.scss";

function HomePage() {
  return (
    <div className="home-wrapper">
      <MovieSorter />
      <MovieList />
    </div>
  );
}
export default HomePage;
