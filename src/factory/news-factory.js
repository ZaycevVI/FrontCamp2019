import { Singleton } from "../service/infrastructure/singleton";
import http from "../service/infrastructure/http";
import { NewsService } from "../service/news-service";
import LoggerDecorator from "../service/proxy/logger";
import ErrorHandler from "../service/proxy/error-handler";

export class NewsFactory {
    static newsService() {
        return ErrorHandler(
            Singleton.instance(NewsService).resolve(
            LoggerDecorator(http)
            ));
    }
}
