import React from "react";
import "./../styles/movieList.scss";
import MovieListContainer from "./movieListContainer";

function HomePage() {
  return (
    <div className="home-wrapper">
      <MovieListContainer />
    </div>
  );
}
export default HomePage;
