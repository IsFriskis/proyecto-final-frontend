import { REGISTER_REQUEST, REGISTER_RESPONSE } from "./actions";

const initialState = {
    loading: false,
    registerInfo: null,
    error: null,
  };

  export const login = (state = initialState, action: any) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        return {
          ...state,
          loading: true,
          registerInfo: null,
          error: null,
        };
      case REGISTER_RESPONSE:
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