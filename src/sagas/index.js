import {takeLatest} from 'redux-saga/effects';
import * as types from '../redux/actions/actionTypes';

import {
    logIn,
    logOut,
    getTokenResult
} from './authenticationSaga';

import {
    loadProviders,
    saveProvider
} from './providerSaga';


function* mySaga() {
    yield takeLatest(types.LOG_OUT_REQUEST, logOut);
    yield takeLatest(types.AUTHENTICATION_GET_TOKEN, getTokenResult);
    yield takeLatest(types.AUTHENTICATION_REQUEST, logIn);
    yield takeLatest(types.SAVE_PROVIDER_REQUEST, saveProvider);
    yield takeLatest(types.LOAD_PROVIDERS_REQUEST, loadProviders);
}
export default mySaga;