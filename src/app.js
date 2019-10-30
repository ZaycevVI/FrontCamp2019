import { NewsAction } from "./action/news-action";
import { ComponentFactory } from "./factory/component-factory";
import { ErrorGenerator } from "./component/error/error-generator";

export class App {
    start() {
        ComponentFactory.newsComponent();
        NewsAction.sourceInitialize();
    }
}