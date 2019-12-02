const router = require('express').Router();
const newsController = require('../controller/news-controller');
const auth = require('../middleware/auth');

router.get('/news', newsController.getAll);

router.get('/news/:id', newsController.getById);

router.post('/news', auth.required, newsController.add);

router.put('/news', auth.required, newsController.update);

router.delete('/news/:id', auth.required, newsController.remove);

module.exports = router;