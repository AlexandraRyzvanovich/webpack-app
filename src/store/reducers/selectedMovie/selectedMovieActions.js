import moviesDataService from "../../../service/moviesDataService.js";

export const fetchMovieById = (id) => {
  return (dispatch) => {
    moviesDataService.getMovieById(id).then((movie) => {
      dispatch({
        type: "movies/byId",
        payload: movie.data,
      });
    });
  };
};

export const addMovie = (movie) => {
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
        type: "movies/byId",
        payload: movie.data,
      });
    });
  };
};

export const deleteMovie = (id) => {
  return (dispatch) => {
    moviesDataService.deleteMovie(id).then(() => {
      dispatch({
        type: "movies/byId",
      });
    });
  };
};
