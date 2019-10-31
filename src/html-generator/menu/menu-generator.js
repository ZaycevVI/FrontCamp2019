import { HtmlGenerator } from '../html-generator';
import menuItemHtml from './menu-item.html';
import menuGeneratorHtml from './menu-generator.html';

export class MenuGenerator extends HtmlGenerator {
    constructor(binder, callback) {
        super();
        this.binder = binder;
        this.callback = callback;
    }

    html(sources) {
        sources = sources.length > 10 ? sources.slice(0, 10) : sources;
        const menu = this.binder.bind(menuGeneratorHtml, sources.first());
        const items = sources.reduce((accum, item) => accum += this.binder.bind(menuItemHtml, item), '');
        const div = this.wrapDiv(menu);
        const dropDown = div.querySelector('.dropdown-content');
        dropDown.innerHTML = items;
        dropDown.addEventListener("click", onMenuItemClick.bind(this));
        return div;
    }
}

function onMenuItemClick(event) {
    const srcElem = event.srcElement;
    const button = document.querySelector('.dropdown > button');
    button.id = srcElem.id;
    button.innerText = srcElem.text;
    if (this.callback) {
        this.callback(srcElem.id);
    }
}