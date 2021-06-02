import { combineReducers } from "redux";
import login from "./loginReducer";
import currentUser from "./currentUserReducer";
import todo from "./getTodoReducer";
import todos from "./allTodoReducer";
import createTodo from "./createTodoReducer";
import updateTodo from "./updateTodoReducer";
import deleteTodo from "./deleteTodoReducer";

const rootReducer = combineReducers({
  login,
  currentUser,
  todo,
  todos,
  createTodo,
  updateTodo,
  deleteTodo,
});

export default rootReducer;
