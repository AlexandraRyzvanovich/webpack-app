const initialState = [];

export default function moviesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case 'movies/fetchAll': {
      return action.payload;
    }
    default:
      return state;
  }
}
