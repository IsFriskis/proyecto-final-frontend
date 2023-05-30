import axios from "axios";
import { Config } from "src/config/Config";

export interface LoginProps {
  login: string;
  password: string;
}

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_RESPONSE = "LOGIN_RESPONSE";

export const login = (credentials: LoginProps): any => {
  return (
    dispatch: (arg0: { type: string; userInfo?: any; error?: string }) => void
  ) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    axios
      .request({
        url: `/user/login/${credentials.login}/${credentials.password}`,
        method: "GET",
        baseURL: Config.SERVICE_URL,
      })
      .then((response) => {
        const userInfo = response.data;

        dispatch({
          type: LOGIN_RESPONSE,
          userInfo: userInfo,
        });
      })
      .catch((e) => {
        dispatch({
          type: LOGIN_RESPONSE,
          userInfo: "error",
          error: e.code,
        });
      });
  };
};
