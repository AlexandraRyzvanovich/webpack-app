import React from "react";
import PropTypes from "prop-types";

function MovieComponent(props) {
  const { img, onGetMovieInfo, name, type, year, onEdit, onDelete, id } = props;
  const handleClick = () => {
    onGetMovieInfo(id);
  };
  return (
    <>
      <div className="movie-wrapper">
        <div>
          <img src={img} onClick={handleClick}></img>
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
                <div className="dropdown-buttons" onClick={onDelete}>
                  <p>Delete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-wrapper">
          <div>
            <p>{name}</p>
            <p>{type}</p>
          </div>
          <div className="year">
            <p>{year}</p>
          </div>
        </div>
      </div>
    </>
  );
}

MovieComponent.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onGetMovieInfo: PropTypes.func,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MovieComponent;
