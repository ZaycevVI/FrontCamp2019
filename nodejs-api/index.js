const app = require('express')();
const newsRouter = require('./router/news-router');
const userRouter = require('./router/user-router');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error-handler');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const userService = require('./service/user-service');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);
app.use('/api', newsRouter, userRouter);
app.use(session({ secret: 'passport', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => {
    userService.login(email, password)
        .then(data => done(null, data.user.toAuthJSON()))
        .catch(err => done(null, false, err));
}));

app.use(errorHandler);


app.listen(8080, function () {
    console.log('Server listening on port 8080!');
});

module.export = app;