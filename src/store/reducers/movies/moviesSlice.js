const initialState = {
  data: [],
  totalAmount: 0,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case "movies/get": {
      return action.payload;
    }
    default:
      return state;
  }
}
