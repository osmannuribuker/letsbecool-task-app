import { DELETE_TODO_SUCCESS, DELETE_TODO_ERROR } from "../actions";

export default function deleteTodoReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case DELETE_TODO_SUCCESS:
      return { ...state, ...response };
    case DELETE_TODO_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}
