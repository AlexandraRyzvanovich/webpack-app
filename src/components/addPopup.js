import React from "react";

import PropTypes from "prop-types";

function AddPopup(props) {
  const { onClose, onSave } = props;
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
          />
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">RELEASE DATE</p>
          <input className="input-add" type="input" placeholder="Select Date" />
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">MOVIE URL</p>
          <input
            className="input-add"
            type="input"
            placeholder="Movie URL here"
          />
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">GENRE</p>
          <input
            className="input-add"
            type="input"
            placeholder="Select Genre"
          />
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">OVERVIEW</p>
          <input
            className="input-add"
            type="input"
            placeholder="Overview here"
          />
        </div>
        <div className="input-add-wrapper">
          <p className="input-title">RUNTIME</p>
          <input
            type="input"
            className="input-add"
            placeholder="Runtime here"
          />
        </div>
        <div className="buttons-wrapper">
          <div className="button-wrapper">
            <div className="button-reset-wrapper">
              <button type="submit" className="button-reset" onClick={onSave}>
                RESET
              </button>
            </div>
            <button type="submit" className="button-submit" onClick={onSave}>
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
  onSave: PropTypes.func.isRequired,
};

export default AddPopup;
