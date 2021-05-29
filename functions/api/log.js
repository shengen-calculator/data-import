const configuration = require('../settings');
const {Datastore} = require('@google-cloud/datastore');

const log = async (req, res) => {

    const token = req.headers['authorization'];
    if(!token || token !== configuration.token) {
        res.status(401).send('Please provide correct credentials');
        return;
    }

    if(req.method === 'POST') {
        if(!req.body.level || !req.body.message) {
            res.status(400).send('Please provide correct parameters - vendor, level, message');
            return;
        }
        const datastore = new Datastore();
        const logKey = datastore.key('import-log');

        await datastore.insert({
            data: {
                Provider: req.body.vendor,
                Date: new Date(),
                Level: req.body.level.toUpperCase(),
                Description: req.body.message
            },
            key: logKey
        });

        res.status(200).send();
    }

};

module.exports = log;