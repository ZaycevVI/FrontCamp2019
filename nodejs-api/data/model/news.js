const uniqueId = require('../random-id');

class News {
    constructor({ title, author, description, content, id = null }) {
        this.id = id || uniqueId();
        this.title = title;
        this.author = author;
        this.description = description;
        this.content = content;
    }
}

module.exports = News;