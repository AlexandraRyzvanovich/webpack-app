import React from "react";
import { addMovie } from "../../store/reducers/selectedMovie/selectedMovieActions";
import { connect } from "react-redux";
import { useFormik, Field, Formik } from "formik";
import SelectField from "./CustomSelect";
import PropTypes from "prop-types";
import * as Yup from "yup";

function AddPopup({ addMovie, onClose }) {

  const options = [
    { value: "Horror", label: "Horror" },
    { value: "Documentary", label: "Documentary" },
    { value: "Comedy", label: "Comedy" },
    { value: "Adventure", label: "Adventure" },
  ];
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    release_date: Yup.string().required("Required"),
    poster_path: Yup.string().required("Required"),
    overview: Yup.string()
      .min(2, "Too Short!")
      .max(150, "Too Long!")
      .required("Required"),
    runtime: Yup.string().required("Required"),
  });

  const handleAddMovie = (values) => {
    addMovie(values);
    onClose();
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      release_date: "",
      poster_path: "",
      genres: "",
      overview: "",
      runtime: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleAddMovie(values);
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
                  <p className="title">ADD MOVIE</p>
                </div>
              </div>
              <div className="input-add-wrapper">
                <p className="input-title">TITLE</p>
                <input
                  className="input-add"
                  id="title"
                  type="input"
                  placeholder="Enter the title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
                {formik.errors.title ? (
                  <div className="error">{formik.errors.title}</div>
                ) : null}
              </div>
              <div className="input-add-wrapper">
                <p className="input-title">RELEASE DATE</p>
                <input
                  className="input-add"
                  id="release_date"
                  type="date"
                  placeholder="Select Date"
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
                  placeholder="Movie URL here"
                  onChange={formik.handleChange}
                  value={formik.values.poster_path}
                />
                {formik.errors.poster_path ? (
                  <div className="error">{formik.errors.poster_path}</div>
                ) : null}
              </div>
              <div className="input-add-wrapper">
                <p className="input-title">GENRES</p>
                <Field
                  component={SelectField}
                  name="genres"
                  id="genres"
                  options={options}
                  value={formik.values.genres}
                />
              </div>
              <div className="input-add-wrapper">
                <p className="input-title">OVERVIEW</p>
                <input
                  className="input-add"
                  type="input"
                  id="overview"
                  placeholder="Overview here"
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
                  placeholder="Runtime here"
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
AddPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps, {
  addMovie,
})(AddPopup);
