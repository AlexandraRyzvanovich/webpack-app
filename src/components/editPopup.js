import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import MovieService from "../service/movieService";

function EditPopup(props) {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = () => {
    setMovie(MovieService.getFullMovieInfo(1));
  };
  const { onClose } = props;
  return (
    <div className="popup-box">
      <div className="box">
        <div className="add-popup-header">
          <div>
            <span className="close" onClick={onClose} />
          </div>
          <div className="title-wrapper">
            <p className="title">EDIT MOVIE</p>
          </div>
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">MOVIE ID</p>
          <p className="input-title">{movie.id}</p>
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">TITLE</p>
          <input className="input-add" placeholder={movie.name}></input>
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">RELEASE DATE</p>
          <input className="input-add" placeholder={movie.year}></input>
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">MOVIW URL</p>
          <input className="input-add" placeholder={movie.url}></input>
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">GENRE</p>
          <input className="input-add" placeholder={movie.comment}></input>
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">OVERVIEW</p>
          <input className="input-add" placeholder={movie.description}></input>
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">RUNTIME</p>
          <input
            placeholder={movie.comment}
            type="input"
            className="input-add"
          ></input>
        </div>
        <div className="buttons-wrapper">
          <div className="button-wrapper">
            <div className="button-reset-wrapper">
              <button type="submit" className="button-reset" onClick={onClose}>
                RESET
              </button>
            </div>
            <button type="submit" className="button-submit" onClick={onClose}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

EditPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default EditPopup;
