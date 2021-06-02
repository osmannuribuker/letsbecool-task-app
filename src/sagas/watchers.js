import { takeLatest } from "redux-saga/effects";
import { loginSaga, currentUserSaga } from "./authenticationSaga";
import {
  getTodoSaga,
  allTodoSaga,
  createTodoSaga,
  updateTodoSaga,
  deleteTodoSaga,
} from "./todoSaga";

import * as types from "../actions";

export default function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.CURRENT_USER, currentUserSaga);
  yield takeLatest(types.GET_TODO, getTodoSaga);
  yield takeLatest(types.ALL_TODO, allTodoSaga);
  yield takeLatest(types.CREATE_TODO, createTodoSaga);
  yield takeLatest(types.UPDATE_TODO, updateTodoSaga);
  yield takeLatest(types.DELETE_TODO, deleteTodoSaga);
}
