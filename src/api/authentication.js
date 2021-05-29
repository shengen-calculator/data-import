import {auth} from './database';

class AuthenticationApi {
    static logIn({email, password}){
        return auth.signInWithEmailAndPassword(email, password);
    }
    static getTokenResult(){
        return auth.currentUser.getIdTokenResult();
    }
    static logOut() {
        return auth.signOut();
    }
}

export default AuthenticationApi;