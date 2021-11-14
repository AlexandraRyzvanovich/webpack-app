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
    onEdit,
    onAdd,
    movie,
  } = props;
  return (
    <>
      {isAddPopupOpened && (
        <AddPopup onClose={onCloseAdd} onSave={onSaveAdd} onAdd={onAdd} />
      )}

      {isEditPopupOpened && (
        <EditPopup
          onSave={onSaveEdit}
          onClose={onCloseEdit}
          movie={movie}
          onEdit={onEdit}
        />
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
  movie: PropTypes.object,
  onEdit: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};
export default PopupContainer;
