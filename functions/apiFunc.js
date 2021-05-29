const functions = require('firebase-functions');
const provider = require('./api/provider');
const log = require('./api/log');

exports.provider = functions.region('europe-west1').https.onRequest(async (req, res) => {
    return  provider(req, res);
});

exports.log = functions.region('europe-west1').https.onRequest(async (req, res) => {
    return  log(req, res);
});
