import React from "react";
import PropTypes from "prop-types";

function MovieComponent(props) {
  const {
    poster_path,
    onGetMovieInfo,
    title,
    genres,
    release_date,
    onEdit,
    onDelete,
    id,
  } = props;
  const handleClick = () => {
    debugger;
    onGetMovieInfo(id);
  };
  return (
    <>
      <div className="movie-wrapper">
        <div>
          <img src={poster_path} onClick={handleClick}></img>
          <div className="dropdown-container" tabIndex="-1">
            <div className="three-dots"></div>
            <div className="dropdown">
              <div className="three-dots-close-wrapper">
                <span className="three-dots-close" />
              </div>
              <div className="movie-buttons-wrapper">
                <div className="dropdown-buttons" onClick={onEdit}>
                  <p>Edit</p>
                </div>
                <div className="dropdown-buttons" onClick={() => onDelete(id)}>
                  <p>Delete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-wrapper">
          <div>
            <p>{title}</p>
            <p>{genres}</p>
          </div>
          <div className="year">
            <p>{release_date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

MovieComponent.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(String),
  release_date: PropTypes.number.isRequired,
  onGetMovieInfo: PropTypes.func,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MovieComponent;
