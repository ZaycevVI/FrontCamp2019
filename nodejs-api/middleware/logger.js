const path = require('path');
const util = require('util');
const loggerPath = path.resolve(__dirname, '..', 'data', 'logger.json')
const { appendFile } = require('fs');
const appendFileAsync = util.promisify(appendFile);

module.exports = function (req, res, next) {
    const logInfo = {
        date: Date.now(),
        url: req.url,
        method: req.method
    }

    appendFileAsync(loggerPath, JSON.stringify(logInfo));
    next()
}