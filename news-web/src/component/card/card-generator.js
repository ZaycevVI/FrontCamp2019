import HtmlGenerator from "../infrastructure/html-generator";
import template from "./card-generator.html";
import Html from '../../helper/html';
import { HtmlRenderer } from "../../service/infrastructure/html-renderer";
import { ComponentConverter } from "../../service/converter/component-converter";
import articleStore from "../../store/article-store";
import htmlBinder from "../../service/binder/html-template-binder";

export class CardGenerator extends HtmlGenerator {
    constructor(selector='.cards') {
        super(selector);
        articleStore.addSubscriber(this.update.bind(this));
    }

    html(articles) {
        return Html.wrap(articles.reduce((acc, art) => acc += htmlBinder.bind(template, art), ''));
    }

    update(articles) {
        HtmlRenderer.render(ComponentConverter.convert(this, articles))
    }
}