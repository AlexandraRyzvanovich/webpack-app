import React, { useEffect, useState } from "react";
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
      <HeaderComponent
        onOpen={handleToggleAddPopup}
        onSearch={handleSearch}
        id={movieId}
        onClearSelection={() => {
          debugger;
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
