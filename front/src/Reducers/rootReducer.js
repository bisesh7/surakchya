import { USER_SIGN_IN, USER_SIGN_OUT } from "../Actions/authActionTypes";

const initState = {
  user: null,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    case USER_SIGN_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      break;
  }
  return state;
};

export default rootReducer;
