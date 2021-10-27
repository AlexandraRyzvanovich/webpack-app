import { combineReducers } from "redux";

import todosReducer from "./store/reducers/todos/todosSlice";
import filtersReducer from "./store/reducers/filters/filterSlice";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
