import { HtmlGenerator } from "../html-generator";
import template from "./card-generator.html";

export class CardGenerator extends HtmlGenerator {
    constructor(binder) {
        super();
        this.binder = binder;
    }

    html(articles) {
        return this.wrapDiv(articles.reduce((acc, art) => acc += this.binder.bind(template, art), ''));
    }
}

