const admin = require('firebase-admin');

admin.initializeApp();

exports.provider = require('./providerFunc');
exports.api = require('./apiFunc');
exports.auth = require('./authFunc');
