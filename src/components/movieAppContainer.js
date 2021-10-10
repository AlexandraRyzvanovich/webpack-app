import React, { useEffect, useState } from "react";
import MovieService from "../service/movieService";

import MovieListContainer from "./movieListContainer";
import HeaderContainer from "./header/headerContainer";
import PopupContainer from "./popup/popupContainer";

function MovieAppContainer() {
  const [films, setFilms] = useState([]);
  const [isAddPopupOpened, setIsAddPopupOpened] = useState(false);
  const [isEditPopupOpened, setIsEditPopupOpened] = useState(false);
  const [isDeletePopupOpened, setIsDeletePopupOpened] = useState(false);
  const [movieId, setMovieId] = useState();

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

  return (
    <>
      <HeaderContainer
        onOpen={handleToggleAddPopup}
        onSearch={handleSearch}
        id={movieId}
        onClearSelection={() => {
          setMovieId(undefined);
        }}
      />
      <MovieListContainer
        onGetFilms={handleGetFilms}
        items={films}
        onGetMovieInfo={setMovieId}
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
      />
    </>
  );
}
export default MovieAppContainer;
