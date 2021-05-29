const functions = require('firebase-functions');

const checkRole = (context) => {

    if (!process.env.FUNCTIONS_EMULATOR) {
        if (!context.auth) {
            throw new functions.https.HttpsError('failed-precondition',
                'The function must be called while authenticated.');
        } else if(context.auth.token.role !== 1) {
            throw new functions.https.HttpsError('failed-precondition',
                'Access denied');
        }
    }
};

module.exports.checkRole = checkRole;
