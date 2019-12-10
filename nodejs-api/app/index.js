const app = require('express')();
const newsRouter = require('../router/news-router');
const userRouter = require('../router/user-router');
const bodyParser = require('body-parser');
const logger = require('../middleware/logger');
const authStrategy = require('../middleware/auth-strategy');
const errorHandler = require('../middleware/error-handler');
const passport = require('passport');
const session = require('express-session');
const serverless = require('serverless-http');
const config = require('../config');

const isDev = process.env.NODE_ENV === "development";

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);
app.use(config.prefix, newsRouter, userRouter);
app.use(session({ secret: 'passport', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
passport.use(authStrategy);
app.use(errorHandler);

if (isDev) {
    app.listen(8080, function () {
        console.log('Server listening on port 8080!');
    });
    module.exports = app;
} else {
    module.exports.handler = serverless(app);
}