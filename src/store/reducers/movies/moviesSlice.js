const initialState = [];

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case "movies/fetchAll": {
      return action.payload;
    }
    case "movies?sortByReleaseDateASC": {
      return action.payload;
    }
    case "movies?sortByReleaseDateDESC": {
      return action.payload;
    }
    case "movies?sortBy": {
      return action.payload;
    }
    case "movies?searchByGenre": {
      return action.payload;
    }
    default:
      return state;
  }
}
