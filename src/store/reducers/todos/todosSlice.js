import { GET_ALL_MOVIES } from "../../actions/type";

const initialState = [];

export default function todosReducer(
  state = initialState,
  action = GET_ALL_MOVIES
) {
  switch (action.type) {
    case GET_ALL_MOVIES: {
      return payload;
    }
    case "todos/todoGetById": {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }
    case "todos/todoAdded": {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }
    case "todos/todoUpdated": {
      // Can return just the new todos array - no extra object around it
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }
    case "todos/todoDeleted": {
      // Can return just the new todos array - no extra object around it
      return state.filter((todo) => todo.id !== action.payload);
    }
    default:
      return state;
  }
}
