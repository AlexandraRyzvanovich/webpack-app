import React from "react";
import PropTypes from "prop-types";

function DeletePopup(props) {
  const { onClose } = props;
  return (
    <div className="popup-box">
      <div className="box-delete">
        <div className="add-popup-header">
          <div>
            <span className="close" onClick={onClose} />
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

DeletePopup.propTypes = {
  onClose: PropTypes.func.isRequierd,
};
export default DeletePopup;
