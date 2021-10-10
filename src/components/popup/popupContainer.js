import React from "react";

import PropTypes from "prop-types";
import AddPopup from "./addPopup";
import EditPopup from "./editPopup";
import DeletePopup from "./deletePopup";

function PopupContainer(props) {
  const {
    isAddPopupOpened,
    isEditPopupOpened,
    isDeletePopupOpened,
    onCloseAdd,
    onSaveAdd,
    onCloseEdit,
    onSaveEdit,
    onCloseDelete,
    onSaveDelete,
  } = props;
  return (
    <>
      {isAddPopupOpened && <AddPopup onClose={onCloseAdd} onSave={onSaveAdd} />}

      {isEditPopupOpened && (
        <EditPopup onSave={onSaveEdit} onClose={onCloseEdit} />
      )}

      {isDeletePopupOpened && (
        <DeletePopup onSave={onSaveDelete} onClose={onCloseDelete} />
      )}
    </>
  );
}

PopupContainer.propTypes = {
  isAddPopupOpened: PropTypes.bool.isRequired,
  isEditPopupOpened: PropTypes.bool.isRequired,
  isDeletePopupOpened: PropTypes.bool.isRequired,
  onCloseAdd: PropTypes.func.isRequired,
  onSaveAdd: PropTypes.func.isRequired,
  onCloseEdit: PropTypes.func.isRequired,
  onSaveEdit: PropTypes.func.isRequired,
  onCloseDelete: PropTypes.func.isRequired,
  onSaveDelete: PropTypes.func.isRequired,
};
export default PopupContainer;
