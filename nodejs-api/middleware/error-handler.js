function errorHandler(err, req, res, next) {
    let msg = '';

    if (err && err.status === 401) {
        res.status(401);
        msg = err.message || msg;
    } else {
        res.status(400);
        msg = err.message || err;
    }

    res.render('error', { error: msg });
}

module.exports = errorHandler;