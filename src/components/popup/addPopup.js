import React from "react";
import { useState } from "react";
import InputNumber from "react-input-number";
import PropTypes from "prop-types";

function AddPopup(props) {
  const { onClose, onAdd } = props;
  const [title, setTitle] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [poster_path, setPosterPath] = useState("");
  const [genres, setGenres] = useState([]);
  const [overview, setOverview] = useState("");
  const [runtime, setRuntime] = useState(0);
  const newMovie = {
    title: title,
    release_date: release_date,
    poster_path: poster_path,
    genres: genres,
    overview: overview,
    runtime: runtime,
  };

  const getGenres = (inputString) => {
    const re = "/s*,s*/";
    setGenres(inputString.split(re));
  };
  return (
    <div className="popup-box">
      <div className="box">
        <div className="add-popup-header">
          <div>
            <span className="close" onClick={onClose} />
          </div>
          <div className="title-wrapper">
            <p className="title">ADD MOVIE</p>
          </div>
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">TITLE</p>
          <input
            className="input-add"
            type="input"
            placeholder="Enter the title"
            value={title}
            onChange={(v) => {
              setTitle(v.target.value);
            }}
          />
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">RELEASE DATE</p>
          <input
            className="input-add"
            type="date"
            placeholder="Select Date"
            value={release_date}
            onChange={(v) => setReleaseDate(v.target.value)}
          />
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">MOVIE URL</p>
          <input
            className="input-add"
            type="input"
            placeholder="Movie URL here"
            value={poster_path}
            onChange={(v) => setPosterPath(v.target.value)}
          />
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">GENRE</p>
          <input
            className="input-add"
            type="input"
            value={genres}
            placeholder="Select Genre"
            onChange={(v) => getGenres(v.target.value)}
          />
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">OVERVIEW</p>
          <input
            className="input-add"
            type="input"
            placeholder="Overview here"
            value={overview}
            onChange={(v) => setOverview(v.target.value)}
          />
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">RUNTIME</p>
          <input
            type="number"
            className="input-add"
            placeholder="Runtime here"
            value={runtime}
            onChange={(v) => setRuntime(parseInt(v.target.value))}
          />
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
              onClick={() => onAdd(newMovie)}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
AddPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default AddPopup;
