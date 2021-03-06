import { combineReducers } from "redux";

import moviesSlice from "./movies/moviesSlice";
import selectedMovieReducer from "./selectedMovie/selectedMovieSlice";

const rootReducer = combineReducers({
  movies: moviesSlice,
  selectedMovie: selectedMovieReducer,
});

export default rootReducer;
