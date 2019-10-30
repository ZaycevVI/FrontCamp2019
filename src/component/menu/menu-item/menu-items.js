import HtmlGenerator from '../../infrastructure/html-generator';
import menuItemHtml from './menu-item.html';
import Html from '../../../helper/html';
import htmlBinder from "../../../service/binder/html-binder-decorator";

export class MenuItems extends HtmlGenerator {
    constructor(selector = '.dropdown-content') {
        super(selector);
    }

    html(sources) {
        const items = sources.reduce((accum, item) => accum += htmlBinder.bind(menuItemHtml, item), '');
        return Html.wrap(items);
    }
}