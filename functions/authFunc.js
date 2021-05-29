const functions = require('firebase-functions');
const signUp = require('./auth/signUp');

exports.signUp = functions.region('europe-west1').auth.user().onCreate((user) => {
    return signUp(user);
});
