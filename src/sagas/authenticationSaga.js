import {call, put} from 'redux-saga/effects';
import * as types from '../redux/actions/actionTypes';
import AuthenticationApi from '../api/authentication';
import toastr from "toastr";

export function* logIn(action) {
    try {
        yield put({type: types.BEGIN_API_CALL});
        yield call(AuthenticationApi.logIn, action.params);
        yield put({type: types.AUTHENTICATION_GET_TOKEN});
    } catch (e) {
        yield put({type: types.API_CALL_ERROR});
        toastr.error(e.message);
        yield put({type: types.AUTHENTICATION_FAILURE, text: e.message});
    }
}

export function* getTokenResult() {
    try {
        const data = yield call(AuthenticationApi.getTokenResult);
        if(data.claims.role) {
            yield put({type: types.AUTHENTICATION_SUCCESS, params: {uid: data.claims.user_id}});
            toastr.success('Вітаємо!');
        } else {
            yield put({type: types.API_CALL_ERROR});
            yield put({type: types.AUTHENTICATION_FAILURE, text: 'Permission denied. Please contact administrator.'});
            toastr.error('Permission denied. Please contact administrator.');
        }
    } catch (e) {
        yield put({type: types.API_CALL_ERROR});
        toastr.error(e.message);
        yield put({type: types.AUTHENTICATION_FAILURE, error: e});
    }
}

export function* logOut() {
    try {
        yield put({type: types.BEGIN_API_CALL});
        yield call(AuthenticationApi.logOut);
        yield put({type: types.LOG_OUT_SUCCESS});
        toastr.success('До зустрічі!')

    } catch (e) {
        yield put({type: types.API_CALL_ERROR});
        yield put({type: types.LOG_OUT_FAILURE, message: e.message});
    }
}

