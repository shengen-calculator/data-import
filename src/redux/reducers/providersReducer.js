import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function providersReducer(state = initialState.providers, action) {
    switch (action.type) {

        case types.LOAD_PROVIDERS_SUCCESS:
            return action.data;

        case types.SAVE_PROVIDER_SUCCESS:

            const existing = state.find(x => x.id === action.provider['id']);

            if(existing) {

                return state.map((item) => {
                    if (item.id !== action.provider['id']) {
                        // This isn't the item we care about - keep it as-is
                        return item
                    }

                    // Otherwise, this is the one we want - return an updated value
                    return {
                        ...item,
                        ...action.provider
                    }
                });
            } else {
                return [...state, action.provider]
            }


        default:
            return state;
    }
}