import * as types from './actionTypes';

export function saveProviderRequest(params) {
    return {type: types.SAVE_PROVIDER_REQUEST, params};
}

export function loadProvidersRequest() {
    return {type: types.LOAD_PROVIDERS_REQUEST};
}