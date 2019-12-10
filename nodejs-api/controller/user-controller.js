const userService = require('../service/user-service');
const createProxy = require('../service/controller-proxy');

class UserController {
    async login(req, res) {
        const { body: { email, password } } = req;
        const data = await userService.login(email, password);
        res.send(data.toAuthJSON());
    }

    async registration(req, res) {
        const { body: { email, password } } = req;
        const data = await userService.registration(email, password);
        res.send(data);
    }
}

module.exports = createProxy(new UserController());