const app = require('express')();
const newsRouter = require('./router/news-router');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error-handler');

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use(bodyParser.json());
app.use(logger);
app.use('/api', newsRouter);
app.use(errorHandler);

app.listen(8080, function () {
    console.log('Server listening on port 8080!');
});

module.export = app;