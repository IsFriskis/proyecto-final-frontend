import { checkStatus } from "../modules/home/reducer";
import { fetchFilteredUser } from "../components/searchContent/reducer";
import { login } from "../components/loginContent2/reducer";
import { register } from "src/components/registerContent/reducer";
import { ranking } from "src/components/ranking/reducer";

export const reducers = {
  checkStatus,
  fetchFilteredUser,
  login,
  register,
  ranking,
};
