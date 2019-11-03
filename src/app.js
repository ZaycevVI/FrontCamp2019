import { NewsAction } from "./action/news-action";
import { ComponentFactory } from "./factory/component-factory";

export class App {
    start() {
        ComponentFactory.newsComponent();
        NewsAction.sourceInitialize();
    }
}