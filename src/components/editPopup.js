import React from "react";
import { Component } from "react";

import "./../styles/header.scss";
import "./../styles/common.scss";
import "./../styles/addPopup.scss";
import PropTypes from "prop-types";

class EditPopup extends Component {
  render() {
    if (this.props.isOpened) {
      return (
        <div className="popup-box">
          <div className="box">
            <div className="add-popup-header">
              <div>
                <span className="close" onClick={this.props.onClose}>
                  x
                </span>
              </div>
              <div className="title-wrapper">
                <p className="title">EDIT MOVIE</p>
              </div>
            </div>
            <div className="input-add-wrapper">
              <p className="input-title">MOVIE ID</p>
              <p className="input-title">{this.props.movieId}</p>
            </div>
            <div className="input-add-wrapper">
              <p className="input-title">TITLE</p>
              <input
                className="input-add"
                placeholder={this.props.movieTitle}
              ></input>
            </div>
            <div className="input-add-wrapper">
              <p className="input-title">RELEASE DATE</p>
              <input
                className="input-add"
                placeholder={this.props.movieReleaseDate}
              ></input>
            </div>
            <div className="input-add-wrapper">
              <p className="input-title">MOVIW URL</p>
              <input
                className="input-add"
                placeholder={this.props.movieUrl}
              ></input>
            </div>
            <div className="input-add-wrapper">
              <p className="input-title">GENRE</p>
              <input
                className="input-add"
                placeholder={this.props.movieGenre}
              ></input>
            </div>
            <div className="input-add-wrapper">
              <p className="input-title">OVERVIEW</p>
              <input
                className="input-add"
                placeholder={this.props.movieOverview}
              ></input>
            </div>
            <div className="input-add-wrapper">
              <p className="input-title">RUNTIME</p>
              <input
                placeholder={this.props.movieRuntime}
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
                <button type="submit" className="button-submit">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <></>;
  }
}

EditPopup.propTypes = {
  onSave: PropTypes.func,
  isOpened: PropTypes.bool,
  onClose: PropTypes.func,
  movieId: PropTypes.number,
  movieTitle: PropTypes.string,
  movieReleaseDate: PropTypes.string,
  movieUrl: PropTypes.string,
  movieGenre: PropTypes.string,
  movieOverview: PropTypes.string,
  movieRuntime: PropTypes.string,
};
export default EditPopup;
