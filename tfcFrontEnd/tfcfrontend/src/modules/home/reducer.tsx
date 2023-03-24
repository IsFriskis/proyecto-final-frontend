import {SERVICE_STATUS_REQUEST, SERVICE_STATUS_RESPONSE} from './actions';

const initialState = {
    loading: false,
    data: false,

};

export const checkStatus = (state = initialState, action : any) => {
    switch(action.type){
        case SERVICE_STATUS_REQUEST:
            return{
                ...state,
                loading: true,
                data : null
            };
        case SERVICE_STATUS_RESPONSE:
            return{
                ...state,
                loading: false,
                data: action.data
            };
        default:
        return state;
    }
}