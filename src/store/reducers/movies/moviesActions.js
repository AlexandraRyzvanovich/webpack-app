import moviesDataService from "../../../service/moviesDataService.js";

export const sortAllByField = (fieldName) => {
  return (dispatch) => {
    moviesDataService.sortByField(fieldName).then((movies) => {
      dispatch({
        type: "movies?sortBy",
        payload: movies.data,
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
        payload: movies.data,
      });
    });
  };
};

export const sortAllByReleaseDateASC = () => {
  return (dispatch) => {
    moviesDataService.sortAllByReleaseDateASC().then((movies) => {
      dispatch({
        type: "movies?sortByReleaseDateASC",
        payload: movies.data,
      });
    });
  };
};

export const sortAllByReleaseDateDESC = () => {
  return (dispatch) => {
    moviesDataService.sortAllByReleaseDateDESC().then((movies) => {
      dispatch({
        type: "movies?sortByReleaseDateDESC",
        payload: movies.data,
      });
    });
  };
};

export const fetchAll = () => {
  debugger;
  return (dispatch) => {
    moviesDataService.getAllMovies().then((movies) => {
      dispatch({
        type: "movies/fetchAll",
        payload: movies.data,
      });
    });
  };
};

export const searchByTitle = (title) => {
  return (dispatch) => {
    moviesDataService.searchByTitle(title).then((movies) => {
      dispatch({
        type: "movies/searchByTitle",
        payload: movies.data,
      });
    });
  };
};
