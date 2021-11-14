import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import MovieListContainer from "./movieListContainer";

import { fetchAll } from "../store/actions/movies";
import {
  fetchMovieById,
  sortAllByReleaseDateASC,
  sortAllByReleaseDateDESC,
  sortAllByField,
  searchByGenre,
  updateMovieInfo,
  addMovie,
} from "../store/actions/movies";
import HeaderContainer from "./header/headerContainer";
import PopupContainer from "./popup/popupContainer";

function MovieAppContainer({
  fetchAll,
  sortAllByReleaseDateASC,
  sortAllByReleaseDateDESC,
  sortAllByField,
  searchByGenre,
  movies,
  updateMovieInfo,
  addMovie,
  fetchMovieById,
  selectedMovie,
}) {
  const [isAddPopupOpened, setIsAddPopupOpened] = useState(false);
  const [isEditPopupOpened, setIsEditPopupOpened] = useState(false);
  const [isDeletePopupOpened, setIsDeletePopupOpened] = useState(false);
  const [movieId, setMovieId] = useState();

  useEffect(() => {
    fetchAll();
  }, []);

  const handleGetMovieById = (id) => {
    debugger;
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
  const handleToggleAddPopup = () => {
    setIsAddPopupOpened(!isAddPopupOpened);
  };

  const handleToggleEditPopup = (id) => {
    debugger;
    setIsEditPopupOpened(!isEditPopupOpened);
    if (!isEditPopupOpened) {
      fetchMovieById(id);
    }
  };

  const handleToggleDeletePopup = () => {
    setIsDeletePopupOpened(!isDeletePopupOpened);
  };

  const handleGetFilms = () => {
    fetchAll();
  };

  const handleSortByRealeaseDate = (sortOrder) => {
    if (sortOrder === "asc") {
      sortAllByReleaseDateASC();
    } else {
      sortAllByReleaseDateDESC();
    }
  };

  const handleSort = (sortField) => {
    sortAllByField(sortField);
  };

  const handleSearchByGenre = (genre) => {
    searchByGenre(genre);
  };

  const handleSearch = () => {
    // setFilms([]);
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
        onGetFilmsByReleaseDate={handleSortByRealeaseDate}
        onGetAllFilms={handleGetFilms}
        onGetSortedFilms={handleSort}
        onSearchByGenre={handleSearchByGenre}
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
        onSaveAdd={handleToggleAddPopup}
        onCloseEdit={handleToggleEditPopup}
        onSaveEdit={handleToggleEditPopup}
        onCloseDelete={handleToggleDeletePopup}
        onSaveDelete={handleToggleDeletePopup}
        movie={selectedMovie}
        onEdit={handleUpdateMovie}
        onAdd={handleAddMovie}
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
  sortAllByReleaseDateASC,
  sortAllByReleaseDateDESC,
  sortAllByField,
  searchByGenre,
  updateMovieInfo,
  addMovie,
})(MovieAppContainer);
