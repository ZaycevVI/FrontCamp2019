const mongoose = require('mongoose');

class MongoClient {
    constructor(connection) {
        this._connection = connection;
    }

    async execute(callback) {
        try {
            await mongoose.connect(this._connection, { useNewUrlParser: true });
            return await callback();
        } finally {
            mongoose.disconnect();
        }
    }
}

module.exports = MongoClient;