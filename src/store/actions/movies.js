import moviesDataService from "../../service/moviesDataService";

export const fetchAll = () => {
  return (dispatch) => {
    moviesDataService.getAllMovies().then((movies) => {
      dispatch({
        type: "movies/fetchAll",
        payload: movies,
      });
    });
  };
};

export const searchByTitle = (title) => {
  return (dispatch) => {
    moviesDataService.searchByTitle(title).then((movies) => {
      dispatch({
        type: "movies/searchByTitle",
        payload: movies,
      });
    });
  };
};

export const fetchMovieById = (id) => {
  return (dispatch) => {
    moviesDataService.getMovieById(id).then((movie) => {
      dispatch({
        type: "movies/fetchMovieById",
        payload: movie.data,
      });
    });
  };
};

export const addMovie = (movie) => {
  debugger;
  return (dispatch) => {
    moviesDataService.addMovie(movie).then((movie) => {
      dispatch({
        type: "movies/addMovie",
        payload: movie.data,
      });
    });
  };
};

export const updateMovieInfo = (movie) => {
  return (dispatch) => {
    moviesDataService.updateMovie(movie).then((movie) => {
      dispatch({
        type: "movies/updateMovie",
        payload: movie.data,
      });
    });
  };
};

export const deleteMovie = (id) => {
  return (dispatch) => {
    moviesDataService.deleteMovie(id).then(() => {
      dispatch({
        type: "movies/deleteMovie",
      });
    });
  };
};

export const sortAllByReleaseDateASC = () => {
  debugger;
  return (dispatch) => {
    moviesDataService.sortAllByReleaseDateASC().then((movies) => {
      dispatch({
        type: "movies?sortByReleaseDateASC",
        payload: movies,
      });
    });
  };
};

export const sortAllByReleaseDateDESC = () => {
  debugger;
  return (dispatch) => {
    moviesDataService.sortAllByReleaseDateDESC().then((movies) => {
      dispatch({
        type: "movies?sortByReleaseDateDESC",
        payload: movies,
      });
    });
  };
};

export const sortAllByField = (fieldName) => {
  debugger;
  return (dispatch) => {
    moviesDataService.sortByField(fieldName).then((movies) => {
      dispatch({
        type: "movies?sortBy",
        payload: movies,
      });
    });
  };
};

export const searchByGenre = (genre) => {
  debugger;
  return (dispatch) => {
    moviesDataService.searchByGenre(genre).then((movies) => {
      dispatch({
        type: "movies?searchByGenre",
        payload: movies,
      });
    });
  };
};
