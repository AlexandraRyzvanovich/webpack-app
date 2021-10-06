import React from "react";

import PropTypes from "prop-types";

import SearchComponent from "./searchComponent";
import LogoComponent from "./logoComponent";
import useMovieInfo from "../../hooks/useMovieInfo";

function HeaderComponent(props) {
  const movie = useMovieInfo(1);

  const { onOpen, onSearch, id, onClearSelection } = props;
  if (id) {
    return (
      <header className="header-info">
        <div className="header-icons-wrapper">
          <LogoComponent />
          <div>
            <img
              src="https://img.icons8.com/windows/32/fa314a/search--v1.png"
              className="search-img"
              onClick={onClearSelection}
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

  return (
    <>
      <header className="header">
        <LogoComponent />
        <button type="submit" className="button-add" onClick={onOpen}>
          <p>+ ADD MOVIE</p>
        </button>
        <SearchComponent onSearch={onSearch} />
      </header>
    </>
  );
}

HeaderComponent.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onClearSelection: PropTypes.func.isRequired,
  id: PropTypes.number,
  onOpenSearch: PropTypes.func,
};

export default HeaderComponent;
