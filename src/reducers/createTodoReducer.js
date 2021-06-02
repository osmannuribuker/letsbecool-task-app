import { CREATE_TODO_SUCCESS, CREATE_TODO_ERROR } from "../actions";

export default function createTodoReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case CREATE_TODO_SUCCESS:
      return { ...state, ...response };
    case CREATE_TODO_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}
