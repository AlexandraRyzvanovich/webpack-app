const initialState = [];

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/sortBy": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload,
      };
    }
    case "filters/sortOrder": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload,
      };
    }
    case "filters/search": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload,
      };
    }
    case "filters/searchBy": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload,
      };
    }
    case "filters/filterByGenre": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload,
      };
    }
    case "filters/offset": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload,
      };
    }
    case "filters/limit": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload,
      };
    }
    default:
      return state;
  }
}
