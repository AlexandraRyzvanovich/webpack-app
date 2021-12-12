import React from "react";
import PropTypes from "prop-types";
import { deleteMovie } from "../../store/reducers/selectedMovie/selectedMovieActions";
import { fetchAll } from "../../store/reducers/movies/moviesActions";
import { connect } from "react-redux";

function DeletePopup({ deleteMovie, onClose, id, movies }) {
  const handleDelete = (id) => {
    deleteMovie(id);
    fetchAll();
    onClose();
  };
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
            <div className="button-reset-wrapper"></div>
            <button
              type="submit"
              className="button-submit"
              onClick={() => handleDelete(id)}
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

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
    movies: state.movies,
  };
};
export default connect(mapStateToProps, {
  deleteMovie,
  fetchAll,
})(DeletePopup);
