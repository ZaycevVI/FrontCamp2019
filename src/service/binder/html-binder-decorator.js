import { Singleton } from "../infrastructure/singleton";
import { HtmlContentBinder } from "./html-content-binder";
import { HtmlAttributeBinder } from "./html-attribute-binder";

export class HtmlBinderDecorator {
    constructor(...binders) {
        this.binders = binders || [];
        this.parser = new DOMParser();
    }

    bind(template, obj) {
        const html = this.parser.parseFromString(template, "text/html");

        for (const binder of this.binders) {
            binder.bind(html, obj);
        }

        return html.querySelector('body').innerHTML;
    }
}

const htmlBinder = Singleton.instance(HtmlBinderDecorator).resolve(new HtmlContentBinder(), new HtmlAttributeBinder());

export default htmlBinder; 