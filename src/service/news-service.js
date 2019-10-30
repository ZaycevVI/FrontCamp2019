import { Url } from "../helper/url";

export class NewsService {
    constructor(http) {
        this.http = http;
    }

    sources(count = 10) {
        return this.http.getJson(Url.sources).then(arg => arg.sources.slice(0, count));
    }

    articles(sourceId) {
        return this.http.getJson(Url.articles(sourceId));
    }
}