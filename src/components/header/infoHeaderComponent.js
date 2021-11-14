import React from "react";
import PropTypes from "prop-types";
import useMovieInfo from "../../hooks/useMovieInfo";
import LogoComponent from "./logoComponent";

function InfoHeader(props) {
  useMovieInfo(props.movie);
  debugger;

  return (
    <header className="header-info">
      <div className="header-icons-wrapper">
        <LogoComponent />
        <div>
          <img
            src="https://img.icons8.com/windows/32/fa314a/search--v1.png"
            className="search-img"
            onClick={props.onClearSelection}
          />
        </div>
      </div>
      <div className="content-wrapper">
        <div>
          <img src={props.movie.poster_path} className="header-img"></img>
        </div>
        <div className="movie-info-wrapper">
          <div className="name-rating-wrapper">
            <div className="movie-name">
              <p className="header-text">{props.movie.title}</p>
            </div>
            <div className="rating-wrapper ">
              <p className="rating">{props.movie.vote_average}</p>
            </div>
          </div>
          <div className="comment-wrapper">
            <p>{props.movie.tagline}</p>
          </div>
          <div className="year-wrapper">
            <p>{props.movie.release_date}</p>
            <p>{props.movie.runtime} min</p>
          </div>
          <div className="description--header-wrapper">
            <p>{props.movie.overview}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

InfoHeader.propTypes = {
  onClearSelection: PropTypes.func.isRequired,
  id: PropTypes.number,
  movie: PropTypes.object,
};

export default InfoHeader;
