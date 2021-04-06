import { USER_SIGN_IN, USER_SIGN_OUT } from "./authActionTypes";

export const userSignIn = (user) => {
  return {
    type: USER_SIGN_IN,
    payload: user,
  };
};

export const userSignOut = () => {
  return {
    type: USER_SIGN_OUT,
  };
};
