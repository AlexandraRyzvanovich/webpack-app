import React, { useEffect, useState } from "react";
import MovieService from "../service/movieService";
import { connect } from "react-redux";

import AddPopup from "./popup/addPopup";
import HeaderComponent from "./header/headerComponent";
import MovieListContainer from "./movieListContainer";
import EditPopup from "./popup/editPopup";
import DeletePopup from "./popup/deletePopup";
import { getAllMovies } from "../store/actions/movies";

function MovieAppContainer(props) {
  const [films, setFilms] = useState([]);
  const [isAddPopupOpened, setIsAddPopupOpened] = useState(false);
  const [isEditPopupOpened, setIsEditPopupOpened] = useState(false);
  const [isDeletePopupOpened, setIsDeletePopupOpened] = useState(false);
  const [movieId, setMovieId] = useState();

  useEffect(() => {
    setFilms(getAllMovies());
  }, []);

  const getAllMovies = () => {
    debugger;
    props.getAllMovies();
  };

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
          setMovieId(undefined);
        }}
      />
      <MovieListContainer
        onGetFilms={handleGetFilms}
        items={props.films}
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

const mapStateToProps = (state) => {
  debugger;
  return {
    films: state.todos,
  };
};

export default connect(mapStateToProps, { getAllMovies })(MovieAppContainer);
