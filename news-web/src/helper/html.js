export default class Html {
    static $(selector, onlyOne = false) {
        return onlyOne ? document.querySelector(selector) : document.querySelectorAll(selector);
    }

    static wrap(html, outer = 'div') {
        const div = document.createElement(outer);
        div.innerHTML = html;
        return div;
    }
}