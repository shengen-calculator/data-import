import {functions} from './database';

class FunctionsApi {
    static saveProvider(provider) {
        const func = functions.httpsCallable('provider-saveProvider');
        return func(provider);
    }

    static loadProviders() {
        const func = functions.httpsCallable('provider-getProvider');
        return func();
    }
}
export default FunctionsApi;