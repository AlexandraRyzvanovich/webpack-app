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
    movie,
    movieId,
  } = props;
  return (
    <>
      {isAddPopupOpened && <AddPopup onClose={onCloseAdd} />}

      {isEditPopupOpened && <EditPopup onClose={onCloseEdit} movie={movie} />}

      {isDeletePopupOpened && (
        <DeletePopup onClose={onCloseDelete} id={movieId} />
      )}
    </>
  );
}

PopupContainer.propTypes = {
  isAddPopupOpened: PropTypes.bool.isRequired,
  isEditPopupOpened: PropTypes.bool.isRequired,
  isDeletePopupOpened: PropTypes.bool.isRequired,
  onCloseAdd: PropTypes.func.isRequired,
  onCloseEdit: PropTypes.func.isRequired,
  onCloseDelete: PropTypes.func.isRequired,
  movie: PropTypes.object,
};
export default PopupContainer;
