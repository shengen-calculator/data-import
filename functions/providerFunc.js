const functions = require('firebase-functions');
const getProvider = require('./provider/getProvider');
const saveProvider = require('./provider/saveProvider');

exports.getProvider = functions.region('europe-west1').https.onCall(async (data, context) => {
    return getProvider(data, context);
});

exports.saveProvider = functions.region('europe-west1').https.onCall(async (data, context) => {
    return saveProvider(data, context);
});