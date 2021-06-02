import { put, call } from "redux-saga/effects";
import {
  loginUserService,
  currentUserService,
} from "../services/authenticationService";

import * as types from "../actions";

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}

export function* currentUserSaga() {
  try {
    const response = yield call(currentUserService);
    yield put({ type: types.CURRENT_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.CURRENT_USER_ERROR, error });
  }
}
