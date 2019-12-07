const config = require('../config');
const News = require('../data/model/news-mongo');
const MongoClient = require('./mongo-client');

class NewsRepository extends MongoClient {

    constructor() {
        super(config.connection);
    }

    async getAll() {
        return await this.execute(() => News.find({}).exec());
    }

    async getById(id) {
        return await this.execute(() => News.findById(id).exec());
    }

    async add(news) {
        return await this.execute(() => News.create({
            title: news.title,
            author: news.author,
            description: news.description,
            content: news.content
        }).then((data) => data._id));
    }

    async remove(id) {
        return await this.execute(() => News.remove({ _id: id }).exec());
    }

    async update(news) {
        return await this.execute(() => News.findByIdAndUpdate(news.id, news).exec());
    }
}

module.exports = new NewsRepository();