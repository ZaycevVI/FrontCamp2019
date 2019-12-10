const config = require('../config');
const Users = require('../data/model/user');
const UnauthorizedError = require('express-jwt').UnauthorizedError;
const MongoClient = require('./mongo-client');

class UserService {
    constructor(client) {
        this.client = client;
    }

    async login(email, password) {
        this._validate(email, password);

        return await this.client.execute(async () => {
            const user = await Users.findOne({ email }).exec();
            if (!user || !user.validatePassword(password))
                throw new UnauthorizedError('credentials_bad_scheme', { message: 'Invalid credentials.' })

            return user;;
        })
    }

    async registration(email, password) {
        this._validate(email, password);

        return await this.client.execute(async () => {
            const existingUser = await Users.findOne({ email }).exec();

            if (existingUser) {
                throw new UnauthorizedError('credentials_bad_scheme', { message: `User with ${email} already exists.` })
            }

            const user = new Users({ email });
            user.setPassword(password);
            await user.save();
            return user.toAuthJSON();
        })
    }

    _validate(email, password) {
        if (!email) {
            throw new UnauthorizedError('credentials_bad_scheme', { message: 'Email is required.' })
        }

        if (!password) {
            throw new UnauthorizedError('credentials_bad_scheme', { message: 'Password is required.' })
        }
    }
}

module.exports = new UserService(new MongoClient(config.connection));