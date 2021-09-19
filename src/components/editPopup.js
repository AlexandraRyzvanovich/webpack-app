import React, { useEffect, useState } from "react";

import "./../styles/header.scss";
import "./../styles/common.scss";
import "./../styles/popup.scss";
import MovieService from "../service/movieService";

const initialMovie = "";

function EditPopup(props) {
  const [movie, setMovie] = useState(initialMovie);

  useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = () => {
    setMovie(MovieService.getFullMovieInfo(1));
  };

  return (
    <div className="popup-box">
      <div className="box">
        <div className="add-popup-header">
          <div>
            <span className="close" onClick={props.onClose} />
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
              <button type="submit" className="button-reset">
                RESET
              </button>
            </div>
            <button
              type="submit"
              className="button-submit"
              onClick={props.onClose}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// EditPopup.propTypes = {
//   onSave: PropTypes.func,
//   isOpened: PropTypes.bool,
//   onClose: PropTypes.func,
//   movieId: PropTypes.number,
//   movieTitle: PropTypes.string,
//   movieReleaseDate: PropTypes.string,
//   movieUrl: PropTypes.string,
//   movieGenre: PropTypes.string,
//   movieOverview: PropTypes.string,
//   movieRuntime: PropTypes.string,
// };
export default EditPopup;
