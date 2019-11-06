import Html from "../../helper/html";

export class HtmlRenderer {
    static render(...htmlComponents) {
        for (const component of htmlComponents) {
            Html.$(component.selector, true).innerHTML = '';
            Html.$(component.selector, true).appendChild(component.element)
        }
    }
}