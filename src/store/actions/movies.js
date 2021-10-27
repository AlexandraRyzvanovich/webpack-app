import moviesDataService from "../../service/moviesDataService";
import { GET_ALL_MOVIES } from "./type";

export const getAllMovies = (dispatch) => {
  try {
    debugger;
    const res = moviesDataService.getAllMovies();

    dispatch({
      type: GET_ALL_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
