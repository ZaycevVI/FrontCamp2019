const mongoose = require('mongoose');

class MongoClient {
    constructor(connection) {
        this._connection = connection;
    }

    async execute(callback) {
        mongoose.connect(this._connection, { useNewUrlParser: true });
        try {
            return await callback();
        } finally {
            mongoose.disconnect();
        }
    }
}

module.exports = MongoClient;