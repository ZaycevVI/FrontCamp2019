const repository = require('../service/news-repository-mongo');
const NewsModel = require('../data/model/news');
const createProxy = require('../service/controller-proxy');

class NewsController {
    async getAll(req, res) {
        const data = await repository.getAll();
        res.send(data);
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await repository.getById(id)
        res.send(data);
    }

    async add(req, res) {
        const data = await repository.add(new NewsModel(req.body))
        res.send(data);
    }

    async remove(req, res) {
        const { id } = req.params;
        await repository.remove(id)
        res.sendStatus(200);
    }

    async update(req, res) {
        await repository.update(new NewsModel(req.body))
        return res.sendStatus(200);
    }
}

module.exports = createProxy(new NewsController());