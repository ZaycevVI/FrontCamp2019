export class HtmlGenerator {
    wrapDiv(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div;
    }
}