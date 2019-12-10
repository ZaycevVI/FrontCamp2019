const config = require('../config');
const News = require('../data/model/news-mongo');
const MongoClient = require('./mongo-client');

class NewsRepository {

    constructor(client) {
        this.client = client;
    }

    async getAll() {
        return await this.client.execute(() => News.find({}).exec());
    }

    async getById(id) {
        return await this.client.execute(() => News.findById(id).exec());
    }

    async add(news) {
        return await this.client.execute(() => News.create({
            title: news.title,
            author: news.author,
            description: news.description,
            content: news.content
        }).then((data) => data._id));
    }

    async remove(id) {
        return await this.client.execute(() => News.remove({ _id: id }).exec());
    }

    async update(news) {
        return await this.client.execute(() => News.findByIdAndUpdate(news.id, news).exec());
    }
}

module.exports = new NewsRepository(new MongoClient(config.connection));