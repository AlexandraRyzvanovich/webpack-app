import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import MovieListContainer from "./movieListContainer";
import {
  fetchAll,
  searchByTitle,
} from "../store/reducers/movies/moviesActions";
import {
  updateMovieInfo,
  deleteMovie,
  fetchMovieById,
} from "../store/reducers/selectedMovie/selectedMovieActions";

import HeaderContainer from "./header/headerContainer";
import PopupContainer from "./popup/popupContainer";

function MovieAppContainer({
  fetchAll,
  movies,
  fetchMovieById,
  selectedMovie,
  searchByTitle,
}) {
  const [isAddPopupOpened, setIsAddPopupOpened] = useState(false);
  const [isEditPopupOpened, setIsEditPopupOpened] = useState(false);
  const [isDeletePopupOpened, setIsDeletePopupOpened] = useState(false);
  const [movieId, setMovieId] = useState();
  const [isCommmonHeaderOpened, setisCommmonHeaderOpened] = useState(true);

  useEffect(() => {
    fetchAll();
  }, []);

  const handleGetMovieById = (id) => {
    fetchMovieById(id);
    setisCommmonHeaderOpened(false);
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

  const handleSearch = (title) => {
    searchByTitle(title);
  };

  return (
    <>
      <HeaderContainer
        onOpen={handleToggleAddPopup}
        onSearch={handleSearch}
        id={movieId}
        onClearSelection={() => {
          setisCommmonHeaderOpened(true);
        }}
        movie={selectedMovie}
        onOpenCommonHeader={isCommmonHeaderOpened}
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
        movieId={movieId}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps, {
  fetchAll,
  fetchMovieById,
  updateMovieInfo,
  deleteMovie,
  searchByTitle,
})(MovieAppContainer);
