const repository = require('../service/news-repository-file');
const NewsModel = require('../data/model/news');

class NewsController {
    getAll(req, res) {
        repository.getAll()
            .then(data => res.send(data));
    }

    getById(req, res) {
        const { id } = req.params;
        repository.getById(id)
            .then(data => res.send(data));
    }

    add(req, res) {
        repository.add(new NewsModel(req.body))
            .then(() => res.sendStatus(200));
    }

    remove(req, res) {
        const { id } = req.params;
        repository.remove(id)
            .then(() => res.sendStatus(200));
    }

    update(req, res) {
        repository.update(new NewsModel(req.body))
            .then(() => res.sendStatus(200));
    }
}

module.exports = new NewsController();