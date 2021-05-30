const configuration = require('../settings');
const {Datastore} = require('@google-cloud/datastore');
const Log = require('../log');
const sql = require('mssql');
const config = require('../mssql.connection').config;



const getProvider = (data, key) =>
    data.map((rec) => {
        return {
            providerId: rec[key].id,
            name: rec.name,
            email: rec.email,
            internalId: rec.internalId,
            type: rec.type,
            login: rec.login,
            password: rec.password,
            downloadDays: rec.downloadDays,
            downloadTime: rec.downloadTime,
            fileName: rec.fileName,
            isActive: rec.isActive
        }
    });


const provider = async (req, res) => {

    const token = req.headers['authorization'];
    if(!token || token !== configuration.token) {
        res.status(401).send('Please provide correct credentials');
        return;
    }


    if(req.method === 'GET') {

        try {
            const datastore = new Datastore();
            const log = new Log();
            const query = datastore
                .createQuery('providers','')
                .limit(100);

            const result = await datastore.runQuery(query);

            await log.info(`Vendor list requested`);
            res.status(200).send(getProvider(result[0], datastore.KEY));

        } catch (err) {
            res.status(500);
        }
    }

    if(req.method === 'POST') {
        if(!req.body.providerId || !req.body.name) {
            res.status(400).send('Please provide correct parameters - name, providerId');
            return;
        }

        const log = new Log(req.body.name);
        const {getQuery} = require(`../handlers/${req.body.name}`);
        await log.info(`Start handling provider ${req.body.name}`);

        try {
            const pool = await sql.connect(config);
            const result = await pool.query(getQuery());
            res.status(200).send(result.recordset);
        } catch (err) {
            res.status(500).send({err: err.message});
        }
    }
};

module.exports = provider;