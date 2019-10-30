import HtmlGenerator from "../infrastructure/html-generator";
import template from './error-generator.html';
import htmlBinder from "../../service/binder/html-binder-decorator";
import Html from "../../helper/html";
import errorStore from "../../store/error-store";
import { HtmlRenderer } from "../../service/infrastructure/html-renderer";
import { ComponentConverter } from "../../service/converter/component-converter";

export class ErrorGenerator extends HtmlGenerator {
    constructor(selector = '.error') {
        super(selector);
        errorStore.addSubscriber(this.update.bind(this));
    }

    html(msg) {
        const div = Html.wrap(htmlBinder.bind(template, {msg}));
        div.querySelector(`.close`).addEventListener('click', onClose.bind(this))
        return div;
    }

    update(msg) {
        HtmlRenderer.render(ComponentConverter.convert(this, msg));
        Html.$(this.selector, true).style.display = 'block';
    }
}

function onClose(event) {
    Html.$(this.selector, true).style.display = 'none';
} 

