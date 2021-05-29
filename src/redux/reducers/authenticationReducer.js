import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authenticationReducer(state = initialState.authentication, action) {
    switch (action.type) {

        case types.AUTHENTICATION_REQUEST:
            return {
                ...state,
                error: ""
            };
        case types.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                userId: action.params.uid
            };

        case types.AUTHENTICATION_FAILURE:
            return {
                ...state,
                error: action.text
            };

        case types.LOG_OUT_SUCCESS:
            return {
                ...state,
                userId: ''
            };
        default:
            return state;
    }
}