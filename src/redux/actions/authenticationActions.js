import * as types from './actionTypes';

export function authenticationRequest(params) {
    return {type: types.AUTHENTICATION_REQUEST, params};
}

export function logoutRequest() {
    return {type: types.LOG_OUT_REQUEST};
}