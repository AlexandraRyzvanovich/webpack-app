import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";

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
  const {idParam} = useParams();
  useEffect(() => {
    if(idParam) {
      () => onGetMovieInfo(idParam)}
  }, []); 

  const handleClick = () => {
    onGetMovieInfo(idParam != undefined ? idParam : id);
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
            {genres !== undefined
              ? genres.map((genre) => <p>{genre}</p>)
              : null}
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
  poster_path: PropTypes.string,
  title: PropTypes.string,
  genres: PropTypes.arrayOf(String),
  release_date: PropTypes,
  onGetMovieInfo: PropTypes.func,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MovieComponent;
