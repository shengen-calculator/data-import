const {Datastore} = require('@google-cloud/datastore');

class Log {
    constructor(){
        this.datastore = new Datastore();
        this.provider_ = '';
    }
    set provider(value) {
        if(value) {
            this.provider_ = value;
        }
    }
    async info(message) {
        await this.datastore.insert({
            data: {
                Provider: this.provider_,
                Date: new Date(),
                Level: 'INFO',
                Description: message
            },
            key: this.getKey()
        });
    }
    async warning(message) {
        await this.datastore.insert({
            data: {
                Provider: this.provider_,
                Date: new Date(),
                Level: 'WARNING',
                Description: message
            },
            key: this.getKey()
        });
    }
    async error(message) {
        await this.datastore.insert({
            data: {
                Provider: this.provider_,
                Date: new Date(),
                Level: 'ERROR',
                Description: message
            },
            key: this.getKey()
        });
    }

    getKey() {
        return this.datastore.key('import-log');
    }
}

module.exports = Log;