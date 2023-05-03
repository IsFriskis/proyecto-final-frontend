import axios from "axios";
import { Config } from "src/config/Config";

export const RANKING_REQUEST = "RANKING_REQUEST";
export const RANKING_RESPONSE = "RANKING_RESPONSE";

export const ranking = ():any => {
    return (
      dispatch: (arg0: {
        type: string;
        rankingInfo?: any;
        error?: string;
      }) => void
    ) => {
      dispatch({
        type: RANKING_REQUEST,
      });
  
      axios
        .request({
          url: `/game/ranking`,
          method: "GET",
          baseURL: Config.SERVICE_URL,
        })
        .then((response) => {
          const rankingInfo = response.data;
          dispatch({
            type: RANKING_RESPONSE,
            rankingInfo,
          });
        })
        .catch((e) => {
          dispatch({
            type: RANKING_RESPONSE,
            rankingInfo: "error",
            error: e.code,
          });
        });
    };
  };