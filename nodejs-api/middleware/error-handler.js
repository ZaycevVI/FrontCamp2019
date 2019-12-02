function errorHandler(err, req, res, next) {
    const error = err.message || err;
    res.status(400);
    res.render('error', { error: error });
}

module.exports = errorHandler;