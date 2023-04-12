import {FETCH_FILTER_USER_REQUEST, FETCH_FILTER_USER_RESPONSE} from './actions';

const initialState = {
    loading: false,
    data: false,

};

export const fetchFilteredUser = (state = initialState, action : any) => {
    switch(action.type){
        case FETCH_FILTER_USER_REQUEST:
            return{
                ...state,
                loading: true,
                data : null
            };
        case FETCH_FILTER_USER_RESPONSE:
            return{
                ...state,
                loading: false,
                data: action.data
            };
        default:
        return state;
    }
}