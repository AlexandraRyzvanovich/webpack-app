const initialState = [];

export default function selectedMovieReducer(state = initialState, action) {
  switch (action.type) {
    case "movies/byId": {
      return action.payload;
    }
    case "movies/addMovie": {
      return [action.payload, ...state];
    }
    default:
      return state;
  }
}
