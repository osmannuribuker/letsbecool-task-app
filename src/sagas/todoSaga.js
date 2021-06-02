import { put, call } from "redux-saga/effects";
import {
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  ALL_TODO_SUCCESS,
  ALL_TODO_ERROR,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_ERROR,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
} from "../actions";
import {
  getTodoService,
  allTodoService,
  createTodoService,
  updateTodoService,
  deleteTodoService,
} from "../services/todoService";

export function* getTodoSaga(payload) {
  try {
    const response = yield call(getTodoService, payload);
    if (response) {
      payload.success(response);
    }
    yield put({ type: GET_TODO_SUCCESS, response });
  } catch (error) {
    yield put({ type: GET_TODO_ERROR, error });
  }
}

export function* allTodoSaga(payload) {
  try {
    const response = yield call(allTodoService, payload);
    yield put({ type: ALL_TODO_SUCCESS, response });
  } catch (error) {
    yield put({ type: ALL_TODO_ERROR, error });
  }
}

export function* createTodoSaga(payload) {
  try {
    const response = yield call(createTodoService, payload);
    if (response) {
      payload.success();
    }
    yield put({ type: CREATE_TODO_SUCCESS, response });
  } catch (error) {
    yield put({ type: CREATE_TODO_ERROR, error });
  }
}

export function* updateTodoSaga(payload) {
  try {
    const response = yield call(updateTodoService, payload);
    if (response) {
      payload.success();
    }
    yield put({ type: UPDATE_TODO_SUCCESS, response });
  } catch (error) {
    yield put({ type: UPDATE_TODO_ERROR, error });
  }
}

export function* deleteTodoSaga(payload) {
  try {
    const response = yield call(deleteTodoService, payload);
    if (response) {
      payload.success();
    }
    yield put({ type: DELETE_TODO_SUCCESS, response });
  } catch (error) {
    yield put({ type: DELETE_TODO_ERROR, error });
  }
}
