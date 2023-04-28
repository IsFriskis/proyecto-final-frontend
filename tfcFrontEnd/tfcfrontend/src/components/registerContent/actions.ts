import axios from "axios";
import { Config } from "src/config/Config";
import { login } from "../loginContent2/actions";
import { RegisterPropsToLoginProps } from "./transformRegisterToLoginProps";

export interface RegisterProps {
  username: string;
  mail: string;
  password: string;
}

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_RESPONSE = "REGISTER_RESPONSE";

export const register = (credentials: RegisterProps): any => {
  return (
    dispatch: (arg0: {
      type: string;
      registerInfo?: any;
      error?: string;
    }) => void
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
        const registerInfo = response.data;
        dispatch({
          type: REGISTER_RESPONSE,
          registerInfo,
        });
        dispatch(login(RegisterPropsToLoginProps(registerInfo)));
      })
      .catch((e) => {
        dispatch({
          type: REGISTER_RESPONSE,
          registerInfo: "error",
          error: e.code,
        });
      });
  };
};
