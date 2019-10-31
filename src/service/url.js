export class Url {
    static get sources() { return `${environment.apiNewsUrl}/sources?apiKey=${environment.apiKey}` };
    static articles(sourceId) { return `${environment.apiNewsUrl}/top-headlines?sources=${sourceId}&apiKey=${environment.apiKey}` };
}