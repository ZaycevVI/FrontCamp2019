const { readFile, exists, writeFile } = require('fs');
const util = require('util');
const readFileAsync = util.promisify(readFile);
const existsAsync = util.promisify(exists);
const writeFileAsync = util.promisify(writeFile);

class JsonFileService {
    async write(path, data) {
        await writeFileAsync(path, JSON.stringify(data));
    }

    async read(path) {
        const exists = await existsAsync(path);
        return exists ? JSON.parse(await readFileAsync(path)) : [];
    }
}

module.exports = new JsonFileService();