import { ApiNewsFactory } from "./factory/api-news-factory";
import { GeneratorFactory } from "./factory/generator-factory";
import ArrayPolyfill from './extensions/array-polyfill'


export class App {
    constructor() {
        this.apiNews = ApiNewsFactory.apiNews();
        this.menu = GeneratorFactory.menuGenerator(_onMenuChanged.bind(this));
        this.card = GeneratorFactory.cardGenerator();
    }

    async start() {
        const { sources } = await this.apiNews.getSources();
        document.querySelector('.menu').appendChild(this.menu.html(sources));
        _onMenuChanged.apply(this, [sources.first().id]);
    }
}

async function _onMenuChanged(id) {
    const { articles } = await this.apiNews.getArticles(id);
    const cards = document.querySelector('.cards');
    cards.innerHTML = '';
    cards.appendChild(this.card.html(articles))
}