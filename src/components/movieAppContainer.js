import React, { Component, useEffect, useState } from "react";
import MovieService from "../service/movieService";

import AddPopup from "./popup/addPopup";
import HeaderComponent from "./header/headerComponent";
import MovieListContainer from "./movieListContainer";
import EditPopup from "./popup/editPopup";
import DeletePopup from "./popup/deletePopup";

function MovieAppContainer() {
  const [films, setFilms] = useState([]);
  const [isAddPopupOpened, setIsAddPopupOpened] = useState(false);
  const [isEditPopupOpened, setIsEditPopupOpened] = useState(false);
  const [isDeletePopupOpened, setIsDeletePopupOpened] = useState(false);
  const [movieId, setMovieId] = useState(0);

  useEffect(() => {
    setFilms(MovieService.getAllMovies());
  }, []);

  const handleToggleAddPopup = () => {
    setIsAddPopupOpened(!isAddPopupOpened);
  };

  const handleToggleEditPopup = () => {
    setIsEditPopupOpened(!isEditPopupOpened);
  };

  const handleToggleDeletePopup = () => {
    setIsDeletePopupOpened(!isDeletePopupOpened);
  };

  const handleGetFilms = () => {
    setFilms(MovieService.getAllMovies());
  };

  const handleSearch = () => {
    setFilms([]);
  };

  const handleToggleHeader = (id) => {
    if (id > 0) {
      setMovieId(id);
    }
    setMovieId(0);
  };

  return (
    <>
      <HeaderComponent
        onOpen={handleToggleAddPopup}
        onSearch={handleSearch}
        id={movieId}
        onOpenSearch={handleToggleHeader}
      />
      <MovieListContainer
        onGetFilms={handleGetFilms}
        items={films}
        onGetMovieInfo={handleToggleHeader}
        onEdit={handleToggleEditPopup}
        onDelete={handleToggleDeletePopup}
      />
      {isAddPopupOpened && (
        <AddPopup
          onClose={handleToggleAddPopup}
          onSave={handleToggleAddPopup}
        />
      )}
      {isEditPopupOpened && (
        <EditPopup
          onSave={handleToggleEditPopup}
          onClose={handleToggleEditPopup}
        />
      )}
      {isDeletePopupOpened && (
        <DeletePopup
          onSave={handleToggleDeletePopup}
          onClose={handleToggleDeletePopup}
        />
      )}
    </>
  );
}
export default MovieAppContainer;
