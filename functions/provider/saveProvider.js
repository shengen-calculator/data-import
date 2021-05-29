const util = require('../util');
const functions = require('firebase-functions');
const {Datastore} = require('@google-cloud/datastore');

const getProvider = (data) => {
    return {
        name: data.name,
        internalId: data.internalId,
        type: data.type,
        description: data.description,
        fileName: data.fileName,
        email: data.email,
        login: data.login,
        password: data.password
    }
};

const saveProvider = async (data, context) => {
    util.checkRole(context);

    try {
        const datastore = new Datastore();
        if (data.id) {
            const providerKey = datastore.key(['providers', Number.parseInt(data.id)]);
            const entity = {
                key: providerKey,
                data: getProvider(data)
            };
            await datastore.update(entity);
            return {
                id: providerKey.id
            }
        } else {
            const providerKey = datastore.key('providers');
            await datastore.insert({
                key: providerKey,
                data: getProvider(data)
            });
            return {
                id: providerKey.id
            }
        }

    } catch (err) {
        if (err) {
            throw new functions.https.HttpsError('internal', err.message);
        }
        return {err: err.message};
    }

};

module.exports = saveProvider;