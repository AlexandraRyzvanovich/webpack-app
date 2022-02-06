const initialState = {
  data: [],
  totalAmount: 0,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case "movies/fetch": {
      return action.payload;
    }
    default:
      return state;
  }
}
