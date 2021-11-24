import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import MovieListContainer from "./movieListContainer";
import {
  fetchAll,
  searchByTitle,
} from "../store/reducers/movies/moviesActions";
import {
  updateMovieInfo,
  addMovie,
  deleteMovie,
  fetchMovieById,
} from "../store/reducers/selectedMovie/selectedMovieActions";

import HeaderContainer from "./header/headerContainer";
import PopupContainer from "./popup/popupContainer";

function MovieAppContainer({
  fetchAll,
  movies,
  updateMovieInfo,
  addMovie,
  deleteMovie,
  fetchMovieById,
  selectedMovie,
  searchByTitle,
}) {
  const [isAddPopupOpened, setIsAddPopupOpened] = useState(false);
  const [isEditPopupOpened, setIsEditPopupOpened] = useState(false);
  const [isDeletePopupOpened, setIsDeletePopupOpened] = useState(false);
  const [movieId, setMovieId] = useState();

  useEffect(() => {
    fetchAll();
  }, []);

  const handleGetMovieById = (id) => {
    fetchMovieById(id);
  };

  const handleAddMovie = (movie) => {
    addMovie(movie);
    handleToggleAddPopup();
  };
  const handleUpdateMovie = (movie) => {
    updateMovieInfo(movie);
    handleToggleEditPopup();
  };

  const handleDeleteMovie = (id) => {
    deleteMovie(id);
    handleToggleDeletePopup();
    fetchAll();
  };
  const handleToggleAddPopup = () => {
    setIsAddPopupOpened(!isAddPopupOpened);
  };

  const handleToggleEditPopup = (id) => {
    setIsEditPopupOpened(!isEditPopupOpened);
    if (!isEditPopupOpened) {
      fetchMovieById(id);
    }
  };

  const handleToggleDeletePopup = (id) => {
    setIsDeletePopupOpened(!isDeletePopupOpened);
    setMovieId(id);
  };

  const handleGetFilms = () => {
    fetchAll();
  };

  const handleSearch = (title) => {
    searchByTitle(title);
  };

  return (
    <>
      <HeaderContainer
        onOpen={handleToggleAddPopup}
        onSearch={handleSearch}
        id={movieId} //set id
        onClearSelection={() => {
          selectedMovie = "";
          setMovieId(undefined);
        }}
        movie={selectedMovie}
      />
      <MovieListContainer
        movies={movies}
        onGetMovieInfo={handleGetMovieById}
        onEdit={handleToggleEditPopup}
        onDelete={handleToggleDeletePopup}
      />
      <PopupContainer
        isAddPopupOpened={isAddPopupOpened}
        isEditPopupOpened={isEditPopupOpened}
        isDeletePopupOpened={isDeletePopupOpened}
        onCloseAdd={handleToggleAddPopup}
        onCloseEdit={handleToggleEditPopup}
        onCloseDelete={handleToggleDeletePopup}
        onSaveDelete={handleToggleDeletePopup}
        movie={selectedMovie}
        onEdit={handleUpdateMovie}
        onAdd={handleAddMovie}
        onDelete={handleDeleteMovie}
        movieId={movieId}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  debugger;
  return {
    movies: state.movies,
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps, {
  fetchAll,
  fetchMovieById,
  updateMovieInfo,
  addMovie,
  deleteMovie,
  searchByTitle,
})(MovieAppContainer);
