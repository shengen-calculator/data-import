import {call, put} from "redux-saga/effects";
import * as types from "../redux/actions/actionTypes";
import ProviderFunctionsApi from "../api/providerFunctions";
import toastr from "toastr";

export function* saveProvider(action) {
    try {
        yield put({type: types.BEGIN_API_CALL});
        const {data} = yield call(ProviderFunctionsApi.saveProvider, action.params);
        yield put({
            type: types.SAVE_PROVIDER_SUCCESS,
            provider: {...action.params, id: data.id.toString()}
        });
        toastr.success('Провайдера успішно збережено');
    } catch (e) {
        yield put({type: types.API_CALL_ERROR});
        toastr.error(e.message);
        yield put({type: types.SAVE_PROVIDER_FAILURE, text: e.message});
    }
}

export function* loadProviders(action) {
    try {
        yield put({type: types.BEGIN_API_CALL});
        const {data} = yield call(ProviderFunctionsApi.loadProviders);
        yield put({type: types.LOAD_PROVIDERS_SUCCESS, data: data});
    } catch (e) {
        yield put({type: types.API_CALL_ERROR});
        toastr.error(e.message);
        yield put({type: types.LOAD_PROVIDERS_FAILURE, text: e.message});
    }
}