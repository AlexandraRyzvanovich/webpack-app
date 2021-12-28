import React from "react";
import PropTypes from "prop-types";

function ConfirmationPopup(props) {
  const { onClose, onDelete, id } = props;
  return (
    <div className="popup-box">
      <div className="box-delete">
        <div className="add-popup-header">
          <div>
            <span className="close" onClick={onClose} />
          </div>
          <div className="title-wrapper">
            <p className="title">CONFIRMATION</p>
            <p className="input-title">
              THE OPERATION HAS BEEN PROCESSED SUCCESSFULLY
            </p>
          </div>
        </div>
        <div className="buttons-wrapper">
          <div className="button-wrapper">
            <div className="button-reset-wrapper"></div>
            <button
              type="submit"
              className="button-submit"
              onClick={() => onDelete(id)}
            >
              CONFIRM
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
export default ConfirmationPopup;
