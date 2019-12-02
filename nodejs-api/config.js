module.exports = (function () {
    switch (process.env.NODE_ENV) {
        case 'development':
            return require('./config-dev');

        case 'production':
            return require('./config-prod');

        default:
            throw new Error('invalid NODE_ENV param');
    }
})();