const router = require('express').Router();
const auth = require('../middleware/auth');
const controller = require('../controller/user-controller')

router.post('/registration', auth.optional, controller.registration);
router.post('/login', auth.optional, controller.login);

module.exports = router;