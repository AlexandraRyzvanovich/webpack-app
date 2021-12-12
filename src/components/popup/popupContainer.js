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
    onCloseEdit,
    onCloseDelete,
    onEdit,
    onAdd,
    movie,
    onDelete,
    movieId,
  } = props;
  return (
    <>
      {isAddPopupOpened && <AddPopup onClose={onCloseAdd} onAdd={onAdd} />}

      {isEditPopupOpened && (
        <EditPopup onClose={onCloseEdit} movie={movie} onEdit={onEdit} />
      )}

      {isDeletePopupOpened && (
        <DeletePopup onClose={onCloseDelete} onDelete={onDelete} id={movieId} />
      )}
    </>
  );
}

PopupContainer.propTypes = {
  isAddPopupOpened: PropTypes.bool.isRequired,
  isEditPopupOpened: PropTypes.bool.isRequired,
  isDeletePopupOpened: PropTypes.bool.isRequired,
  onSaveAdd: PropTypes.func.isRequired,
  onSaveEdit: PropTypes.func.isRequired,
  onCloseAdd: PropTypes.func.isRequired,
  onCloseEdit: PropTypes.func.isRequired,
  onCloseDelete: PropTypes.func.isRequired,
  onSaveDelete: PropTypes.func.isRequired,
  movie: PropTypes.object,
  onEdit: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};
export default PopupContainer;
