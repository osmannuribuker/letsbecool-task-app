import { GET_TODO_SUCCESS, GET_TODO_ERROR } from "../actions";

export default function getTodoReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case GET_TODO_SUCCESS:
      return { ...state, response };
    case GET_TODO_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}
