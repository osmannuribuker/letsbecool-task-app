import * as types from "./index";

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user,
  };
};

export const currentUserAction = () => {
  return {
    type: types.CURRENT_USER,
  };
};
