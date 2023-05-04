import { RANKING_REQUEST, RANKING_RESPONSE } from "./actions";

const initialState = {
  loading: false,
  rankingInfo: null,
  error: null,
};

export const ranking = (state = initialState, action: any) => {
  switch (action.type) {
    case RANKING_REQUEST:
      return {
        ...state,
        loading: true,
        rankingInfo: null,
        error: null,
      };
    case RANKING_RESPONSE:
      return {
        ...state,
        loading: false,
        rankingInfo: action.rankingInfo,
        error: action.error,
      };
    default:
      return state;
  }
};
