import { combineReducers } from "redux";

import moviesSlice from "./movies/moviesSlice";

const rootReducer = combineReducers({
  movies: moviesSlice,
});

export default rootReducer;
