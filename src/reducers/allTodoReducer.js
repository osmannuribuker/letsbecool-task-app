import { ALL_TODO_SUCCESS, ALL_TODO_ERROR } from "../actions";

export default function allTodoReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case ALL_TODO_SUCCESS:
      return { ...state, response };
    case ALL_TODO_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
