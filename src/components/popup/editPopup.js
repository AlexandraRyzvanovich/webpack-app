import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormik, Field, Formik } from "formik";
import { connect } from "react-redux";
import { updateMovieInfo } from "../../store/reducers/selectedMovie/selectedMovieActions";
import * as Yup from 'yup';

function EditPopup({ updateMovieInfo, onClose, movie }) {
  const handleEdit = (values) => {
    updateMovieInfo(values);
    onClose();
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    release_date: Yup.string()
      .required('Required'),
    poster_path: Yup.string().required('Required'),
    overview: Yup.string()
      .min(2, 'Too Short!')
      .max(150, 'Too Long!')
      .required('Required'),
    runtime: Yup.string()
      .required('Required')
  });

  const formik = useFormik({
    initialValues: {
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      tagline: movie.tagline,
      overview: movie.overview,
      runtime: movie.runtime,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleEdit(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Formik initialValues={formik.values || formik.initialValues}>
        <form onSubmit={formik.handleSubmit}>
          <div className="popup-box">
            <div className="box">
              <div className="add-popup-header">
                <div>
                  <span className="close" onClick={onClose} />
                </div>
                <div className="title-wrapper">
                  <p className="title">EDIT MOVIE</p>
                </div>
              </div>
              <div className="input-add-wrapper">
                <p className="input-title">MOVIE ID</p>
                <p className="input-title">{movie.id}</p>
              </div>
              <div className="input-add-wrapper">
                <p className="input-title">TITLE</p>
                <input
                  className="input-add"
                  id="title"
                  type="input"
                  placeholder={formik.initialValues.title}
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
                {formik.errors.title ? <div className="error">{formik.errors.title}</div> : null}
              </div>
              <div className="input-add-wrapper">
                <p className="input-title">RELEASE DATE</p>
                <input
                  className="input-add"
                  id="release_date"
                  type="date"
                  placeholder={movie.release_date}
                  onChange={formik.handleChange}
                  value={formik.values.release_date}
                />
                {formik.errors.release_date ? (
                  <div className="error">{formik.errors.release_date}</div>
                ) : null}
              </div>
              <div className="input-add-wrapper">
                <p className="input-title">MOVIE URL</p>
                <input
                  className="input-add"
                  type="input"
                  id="poster_path"
                  placeholder={movie.poster_path}
                  onChange={formik.handleChange}
                  value={formik.values.poster_path}
                />
                {formik.errors.poster_path ? (
                  <div className="error">{formik.errors.poster_path}</div>
                ) : null}
              </div>
              <div className="input-add-wrapper">
                <p className="input-title">TAGLINE</p>
                <input
                  className="input-add"
                  type="input"
                  id="tagline"
                  placeholder={movie.tagline}
                  onChange={formik.handleChange}
                  value={formik.values.tagline}
                />
              </div>
              <div className="input-add-wrapper">
                <p className="input-title">OVERVIEW</p>
                <input
                  className="input-add"
                  type="input"
                  id="overview"
                  placeholder={movie.overview}
                  onChange={formik.handleChange}
                  value={formik.values.overview}
                />
                {formik.errors.overview ? (
                  <div className="error">{formik.errors.overview}</div>
                ) : null}
              </div>
              <div className="input-add-wrapper">
                <p className="input-title">RUNTIME</p>
                <input
                  type="number"
                  className="input-add"
                  id="runtime"
                  placeholder={movie.runtime}
                  onChange={formik.handleChange}
                  value={formik.values.runtime}
                />
                {formik.errors.runtime ? (
                  <div className="error">{formik.errors.runtime}</div>
                ) : null}
              </div>
              <div className="buttons-wrapper">
                <div className="button-wrapper">
                  <div className="button-reset-wrapper">
                    <button
                      type="submit"
                      className="button-reset"
                      onClick={onClose}
                    >
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
        </form>
      </Formik>
    </div>
  );
}

EditPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  movie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};
export default connect(mapStateToProps, {
  updateMovieInfo,
})(EditPopup);
