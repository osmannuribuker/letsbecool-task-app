import {
  GET_TODO,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  ALL_TODO,
} from "./index";

export const getTodoAction = (pk, success) => {
  return {
    type: GET_TODO,
    pk,
    success,
  };
};

export const allTodoAction = () => {
  return {
    type: ALL_TODO,
  };
};

export const createTodoAction = (todo, success) => {
  return {
    type: CREATE_TODO,
    todo,
    success,
  };
};

export const updateTodoAction = (todo, pk, success) => {
  return {
    type: UPDATE_TODO,
    todo,
    pk,
    success,
  };
};

export const deleteTodoAction = (pk, success) => {
  return {
    type: DELETE_TODO,
    pk,
    success,
  };
};
