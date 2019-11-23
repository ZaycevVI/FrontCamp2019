import HtmlBinder from '../binder/infrastructure/html-binder'

export class HtmlContentBinder extends HtmlBinder {
    constructor(selector = '*[data-bind]') { 
        super(selector);
    }

    bind(html, obj) {
        const elements = html.querySelectorAll(this.selector);

        for (const elem of elements) {
            const key = elem.dataset.bind;
            elem.innerHTML = obj[key] || '';
        }
    }
}