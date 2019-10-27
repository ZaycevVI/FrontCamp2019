import { Url } from './url'
import { Http } from './http'

export class ApiNewsService {
    getSources() {
        return Http.getJson(Url.sources);
    }

    getArticles(sourceId) {
        return Http.getJson(Url.articles(sourceId));
    }
} 