import axios from 'axios';
import { Config } from 'src/config/Config';

export const SERVICE_STATUS_REQUEST = 'SERVICE_STATUS_REQUEST';
export const SERVICE_STATUS_RESPONSE = 'SERVICE_STATUS_RESPONSE';



export const checkStatus = (): any => {
    return (dispatch: (arg0: { type: string; data?: any; loading?: boolean }) => void) => {
        dispatch({
            type: SERVICE_STATUS_REQUEST,
            data: null,
        });

        axios
        .request({
            url: '/general/status',
            method: 'GET',
            baseURL: Config.SERVICE_URL,
          })
        .then((response) => {
            
            dispatch({
                type: SERVICE_STATUS_RESPONSE,
                data: response.data,
            });
            
        })
        .catch((e) => {
            dispatch({
              type: SERVICE_STATUS_RESPONSE,
              data: false,
            });
          });
    };
}