import React from "react";
import { Component } from "react";

import "./../styles/header.scss";
import "./../styles/common.scss";
import "./../styles/addPopup.scss";
import PropTypes from "prop-types";

class DeletePopup extends Component {
  render() {
    if (!this.props.isOpened) {
      return (
        <div className="popup-box">
          <div className="box">
            <div className="add-popup-header">
              <div>
                <span className="close-icon" onClick={this.props.onClose}>
                  x
                </span>
              </div>
              <div className="title-wrapper">
                <p className="title">DELETE MOVIE</p>
                <p className="input-title">
                  Are you sure you want to delete movie?
                </p>
              </div>
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

DeletePopup.propTypes = {
  onSave: PropTypes.func,
  isOpened: PropTypes.bool,
  onClose: PropTypes.func,
};
export default DeletePopup;
