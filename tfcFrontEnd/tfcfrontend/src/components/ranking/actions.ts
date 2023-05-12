import axios from "axios";
import { Config } from "src/config/Config";

export const RANKING_REQUEST = "RANKING_REQUEST";
export const RANKING_RESPONSE = "RANKING_RESPONSE";

  export const ranking = ():any => {
    return  new Promise((resolve, reject) => {
      axios
        .request({
          url: `/game/ranking`,
          method: "GET",
          baseURL: Config.SERVICE_URL,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((e) => {
          reject(e)
        });
    })
  
      
  };