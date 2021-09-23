import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import LogoComponent from "./logoComponent.js";
import MovieService from "../service/movieService";

function MovieInfoHeader(props) {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = () => {
    setMovie(MovieService.getFullMovieInfo(1));
  };

  return (
    <header className="header-info">
      <div className="header-icons-wrapper">
        <LogoComponent />
        <div>
          <img
            src="https://img.icons8.com/windows/32/fa314a/search--v1.png"
            className="search-img"
            onClick={props.onOpenSearch}
          />
        </div>
      </div>
      <div className="content-wrapper">
        <div>
          <img src={movie.url} className="header-img"></img>
        </div>
        <div className="movie-info-wrapper">
          <div className="name-rating-wrapper">
            <div className="movie-name">
              <p className="header-text">{movie.name}</p>
            </div>
            <div className="rating-wrapper ">
              <p className="rating">{movie.rating}</p>
            </div>
          </div>
          <div className="comment-wrapper">
            <p>{movie.comment}</p>
          </div>
          <div className="year-wrapper">
            <p>{movie.year}</p>
            <p>{movie.length} min</p>
          </div>
          <div className="description--header-wrapper">
            <p>{movie.description}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

MovieInfoHeader.propTypes = {
  onOpenSearch: PropTypes.func.isRequired,
};
export default MovieInfoHeader;
