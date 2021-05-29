import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import authentication from './authenticationReducer';
import providers from './providersReducer'
import apiCallsInProgress from "./apiStatusReducer";
import storage from 'redux-persist/lib/storage';


export const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        'apiCallsInProgress',
        'providers'
    ]
};

const authPersistConfig = {
    key: 'authentication',
    storage: storage,
    blacklist: ['logging', 'outing', 'error']
};


const rootReducer = combineReducers({
    authentication: persistReducer(authPersistConfig, authentication),
    apiCallsInProgress,
    providers
});

export default rootReducer;