const util = require('../util');
const functions = require('firebase-functions');
const {Datastore} = require('@google-cloud/datastore');


const getProvider = async (data, context) => {
    util.checkRole(context);

    try {
        const datastore = new Datastore();
        const query = datastore.createQuery('providers','').limit(200);
        const result = await datastore.runQuery(query);
        return result[0].map(x => {
            return {
                id: x[datastore.KEY].id,
                name: x.name,
                internalId: x.internalId,
                type: x.type,
                description: x.description,
                email: x.email,
                fileName: x.fileName,
                login: x.login,
                loginUrl: x.loginUrl,
                password: x.password,
                url: x.url
            }
        });

    } catch (err) {
        if(err) {
            throw new functions.https.HttpsError('internal', err.message);
        }
        return {err: err.message};
    }
};

module.exports = getProvider;