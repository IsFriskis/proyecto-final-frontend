import axios from "axios";
import { Config } from "src/config/Config";

export interface RegisterProps {
  username: string;
  mail: string;
  password: string;
}

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_RESPONSE = "REGISTER_RESPONSE";


export const register = (credentials: RegisterProps): any => {
  return (
    dispatch: (arg0: { type: string; userInfo?: any; error?: string }) => void
  ) => {
    dispatch({
      type: REGISTER_REQUEST,
    });

    axios
      .request({
        url: `/user/register/${credentials.username}/${credentials.mail}/${credentials.password}`,
        method: "POST",
        baseURL: Config.SERVICE_URL,
      })
      .then((response) => {
        const userInfo = response.data;

        dispatch({
          type: REGISTER_RESPONSE,
          userInfo,
        });
      })
      .catch((e) => {
        dispatch({
          type: REGISTER_RESPONSE,
          userInfo: "error",
          error: e.code,
        });
      });
  };
};
