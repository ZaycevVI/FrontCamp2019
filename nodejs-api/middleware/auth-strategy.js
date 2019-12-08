const LocalStrategy = require('passport-local');
const userService = require('../service/user-service');

module.exports = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => {
    userService.login(email, password)
        .then(data => done(null, data.user.toAuthJSON()))
        .catch(err => done(null, false, err));
})