import { LOGIN_REQUEST, LOGIN_RESPONSE } from "./actions";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

export const login = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_RESPONSE:
      return {
        ...state,
        loading: false,
        userInfo: action.userInfo,
        error: action.error,
      };
    default:
      return state;
  }
};
