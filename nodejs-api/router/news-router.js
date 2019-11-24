const router = require('express').Router();
const newsController = require('../controller/news-controller');

router.get('/news', newsController.getAll);

router.get('/news/:id', newsController.getById);

router.post('/news', newsController.add);

router.put('/news', newsController.update);

router.delete('/news/:id', newsController.remove);

module.exports = router;