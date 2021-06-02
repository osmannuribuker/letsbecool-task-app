import { CURRENT_USER_SUCCESS, CURRENT_USER_ERROR } from "../actions";

export default function currentUserReducer(state = [], action) {
  const response = action.response;

  switch (action.type) {
    case CURRENT_USER_SUCCESS:
      return { ...state, response };
    case CURRENT_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
