import HtmlBinder from '../binder/infrastructure/html-binder'

export class HtmlAttributeBinder extends HtmlBinder {
    constructor(selector = '*[data-bind-attr]') { 
        super(selector);
    }

    bind(html, obj) {
        const elements = html.querySelectorAll(this.selector);

        for (const elem of elements) {
            const [key, attr] = elem.dataset.bindAttr.split('|');
            elem.setAttribute(attr, obj[key]);
        }
    }
} 