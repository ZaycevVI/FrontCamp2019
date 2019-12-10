const errorHandler = require('../middleware/error-handler');

function createProxy(controller) {
    return new Proxy(controller, {
        get: (target, name) => {
            if (typeof target[name] === "function") {
                return (...args) => {
                    return target[name](...args)
                        .catch((err) => errorHandler(err, ...args));
                }
            }
        }
    });
}

module.exports = createProxy;