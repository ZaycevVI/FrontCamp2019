import 'whatwg-fetch'

export class Http {
    static getJson(url) {
        return fetch(url).then(res => res.json());
    }
}