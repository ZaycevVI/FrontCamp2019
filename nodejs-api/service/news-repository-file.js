const path = require('path');
const jsonFile = require('../service/json-file-service')

class NewsRepository {
    async getAll() {
        return await jsonFile.read(this._path);
    }

    async getById(id) {
        return (await jsonFile.read(this._path)).find(news => news.id === id) || JSON.stringify(null);
    }

    async add(news) {
        const source = await jsonFile.read(this._path);
        source.push(news);
        await jsonFile.write(this._path, source);
    }

    async remove(id) {
        const news = jsonFile.read(this._path);
        const result = news.filter(n => n.id != id);

        if (news.length !== result.length) {
            await jsonFile.write(this._path, result);
        }
    }

    async update(news) {
        const source = await jsonFile.read(this._path);
        const index = source.findIndex(n => n.id === news.id);

        if (index > -1) {
            source[index] = news;
            await jsonFile.write(this._path, source);
        }
    }

    get _path() {
        return path.resolve(__dirname, '..', 'data', 'news.json');
    }
}

module.exports = new NewsRepository();