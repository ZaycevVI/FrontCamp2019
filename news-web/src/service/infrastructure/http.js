import 'whatwg-fetch'
import ErrorHandler from '../proxy/error-handler'
import { Singleton } from './singleton';

class Http {
    getJson(url) {
        return fetch(url).then(res => res.json());
    }
}

export default ErrorHandler(Singleton.instance(Http).resolve());