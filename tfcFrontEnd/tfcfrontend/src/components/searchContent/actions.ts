import axios from 'axios';
import { Config } from 'src/config/Config';

export const FETCH_FILTER_USER_REQUEST = 'FETCH_FILTER_USER_REQUEST';
export const FETCH_FILTER_USER_RESPONSE = 'FETCH_FILTER_USER_RESPONSE';

export interface fetchFilterUserProps {
    searchName: string,
    page: number,
    offset: number,
}



export const fetchFilteredUser = (): any => {


    return (dispatch: (arg0: { type: string; data?: any;}) => void) => {
        dispatch({
            type: FETCH_FILTER_USER_REQUEST,
        });

        axios
        .request({
            url: `/user/playercards`,
            method: 'GET',
            baseURL: Config.SERVICE_URL,
          })
        .then((response) => {
            dispatch({
                type: FETCH_FILTER_USER_RESPONSE,
                data: response.data,
            });
            
        })
        .catch((e) => {
            dispatch({
              type: FETCH_FILTER_USER_RESPONSE,
              data: null,
            });
          });
    };
}