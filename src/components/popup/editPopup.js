import React, { useState } from "react";
import PropTypes from "prop-types";

function EditPopup(props) {
  const { onClose, movie, onEdit } = props;

  const [title, setTitle] = useState(movie.title);
  const [release_date, setReleaseDate] = useState(movie.release_date);
  const [vote_average, setVoteAverage] = useState(movie.vote_average);
  const [tagline, setTagline] = useState(movie.tagline);
  const [overview, setOverview] = useState(movie.overview);
  const [runtime, setRuntime] = useState(movie.runtime);

  const changedMovie = {
    title,
    tagline,
    vote_average: parseInt(movie.vote_average),
    vote_count: parseInt(movie.vote_count),
    release_date,
    poster_path: movie.poster_path,
    overview,
    budget: movie.budget,
    revenue: movie.revenue,
    runtime: parseInt(movie.runtime),
    genres: movie.genres,
    id: movie.id,
  };

  const handleSubmit = () => {
    onEdit(changedMovie);
    onClose();
  };

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
          <input
            className="input-add"
            placeholder={movie.title}
            value={title}
            onChange={(v) => {
              setTitle(v.target.value);
            }}
          ></input>
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">RELEASE DATE</p>
          <input
            className="input-add"
            type="date"
            placeholder={movie.release_date}
            value={release_date}
            onChange={(v) => setReleaseDate(v.target.value)}
          ></input>
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">AVERAGE VOTE</p>
          <input
            className="input-add"
            placeholder={movie.vote_average}
            value={vote_average}
            onChange={(v) => setVoteAverage(v.target.value)}
          ></input>
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">TAGLINE</p>
          <input
            className="input-add"
            placeholder={movie.tagline}
            value={tagline}
            onChange={(v) => setTagline(v.target.value)}
          ></input>
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">OVERVIEW</p>
          <input
            className="input-add"
            placeholder={movie.overview}
            value={overview}
            onChange={(v) => setOverview(v.target.value)}
          ></input>
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">RUNTIME</p>
          <input
            placeholder={movie.runtime}
            type="input"
            className="input-add"
            value={runtime}
            onChange={(v) => setRuntime(v.target.value)}
          ></input>
        </div>
        <div className="buttons-wrapper">
          <div className="button-wrapper">
            <div className="button-reset-wrapper">
              <button type="submit" className="button-reset" onClick={onClose}>
                RESET
              </button>
            </div>
            <button
              type="submit"
              className="button-submit"
              onClick={handleSubmit}
            >
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
  onEdit: PropTypes.func.isRequired,
  movie: PropTypes.func.isRequired,
};
export default EditPopup;
