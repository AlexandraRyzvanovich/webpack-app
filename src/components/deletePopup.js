import React from "react";

import "./../styles/header.scss";
import "./../styles/common.scss";
import "./../styles/popup.scss";

function DeletePopup(props) {
  if (props.isOpened) {
    return (
      <div className="popup-box">
        <div className="box-delete">
          <div className="add-popup-header">
            <div>
              <span className="close" onClick={props.onClose} />
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
                <button
                  type="submit"
                  className="button-reset"
                  onClick={props.onClose}
                >
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
  } else return null;
}
export default DeletePopup;
