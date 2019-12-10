module.exports = function (req, res, next) {
    const logInfo = {
        date: Date.now(),
        url: req.url,
        method: req.method
    }

    console.log(logInfo);
    next()
}