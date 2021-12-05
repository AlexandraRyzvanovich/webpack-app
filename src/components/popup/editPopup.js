import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormik, Field, Formik } from "formik";
import SelectField from "./CustomSelect";

function EditPopup(props) {
  const { onClose, movie, onEdit } = props;

  const handleEdit = (values) => {
    onEdit(values);
    onClose();
  };

  const options = [
    { value: "Horror", label: "Horror" },
    { value: "Documentarie", label: "Documentarie" },
    { value: "Comedy", label: "Comedy" },
    { value: "Adventure", label: "Adventure" },
  ];

  const validate = (values) => {
    const errors = {};
    if (values.title.length > 15) {
      errors.title = "Must be 15 characters or less";
    }

    if (!values.poster_path.includes("http")) {
      errors.poster_path = "Poster path must be a link";
    }

    if (values.overview.length > 15) {
      errors.overview = "Must be 15 characters or less";
    }
    return errors;
  };

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
    validate,
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
                  placeholder={movie.title}
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
                {formik.errors.title ? <div>{formik.errors.title}</div> : null}
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
                  <div>{formik.errors.release_date}</div>
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
                  <div>{formik.errors.poster_path}</div>
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
                  <div>{formik.errors.overview}</div>
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
                  <div>{formik.errors.runtime}</div>
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
export default EditPopup;
