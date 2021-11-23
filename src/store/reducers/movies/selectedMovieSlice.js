const initialState = [];

export default function selectedMovieReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case "movies/fetchMovieById": {
      debugger;
      return action.payload;
    }
    case "movies/addMovie": {
      return [action.payload, ...state];
    }

    case "movies/updateMovie": {
      return action.payload;
    }
    case "movies/deleteMovie": {
      return action.payload;
    }
    default:
      return state;
  }
}
