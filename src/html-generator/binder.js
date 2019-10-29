export class Binder {
    constructor() {
        this.parser = new DOMParser();
    }

    bind(template, obj) {
        const html = this.parser.parseFromString(template, "text/html");
        const bindedElemsContent = html.querySelectorAll('*[data-bind]');
        const bindedElemsAttr = html.querySelectorAll('*[data-bind-attr]');

        for (const elem of bindedElemsContent) {
            const key = elem.dataset.bind;
            elem.innerHTML = obj[key] || '';
        }

        for (const elem of bindedElemsAttr) {
            const [key, attr] = elem.dataset.bindAttr.split('|');
            elem.setAttribute(attr, obj[key]);
        }

        return html.querySelector('body').innerHTML;
    }
}