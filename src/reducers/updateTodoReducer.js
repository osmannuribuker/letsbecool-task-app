import { UPDATE_TODO_SUCCESS, UPDATE_TODO_ERROR } from "../actions";

export default function updateTodoReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case UPDATE_TODO_SUCCESS:
      return { ...state, ...response };
    case UPDATE_TODO_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}
