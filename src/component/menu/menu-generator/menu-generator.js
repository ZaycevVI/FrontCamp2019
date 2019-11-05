import HtmlGenerator from '../../infrastructure/html-generator';
import menuGeneratorHtml from './menu-generator.html';
import Html from '../../../helper/html';
import { MenuItems } from '../menu-item/menu-items';
import htmlBinder from '../../../service/binder/html-template-binder';
import sourceStore from '../../../store/source-store';
import { HtmlRenderer } from '../../../service/infrastructure/html-renderer';
import { ComponentConverter } from '../../../service/converter/component-converter';
import { NewsAction } from '../../../action/news-action';

export class MenuGenerator extends HtmlGenerator {
    constructor(selector = '.menu') {
        super(selector);
        this.menuItemsGenerator = new MenuItems();
        sourceStore.addSubscriber(this.update.bind(this));
    }

    html({id, sources}) {
        const menu = htmlBinder.bind(menuGeneratorHtml, {id});
        const div = Html.wrap(menu);
        const items = this.menuItemsGenerator.html(sources);
        const menuItemsContainer = div.querySelector(this.menuItemsGenerator.selector);
        menuItemsContainer.appendChild(items);
        div.querySelector(this.menuItemsGenerator.selector).addEventListener("click", onMenuItemClick.bind(this));
        return div;
    }

    update(arg) {
        HtmlRenderer.render(ComponentConverter.convert(this, arg));
        NewsAction.updateArticle(arg.id);
    }
}

function onMenuItemClick(event) {
    NewsAction.updateSource(event.srcElement.id);
}