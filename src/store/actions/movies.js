import moviesDataService from "../../service/moviesDataService";

export const fetchAll = (someData) => {
  return (dispatch) => {
    moviesDataService.getAllMovies().then((movies) => {
      dispatch({
        type: 'movies/fetchAll',
        payload: movies,
      });
    });


  }
};
