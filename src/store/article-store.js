import { Store } from './store';
import { Command } from '../helper/command';
import { NewsFactory } from '../factory/news-factory';

class ArticleStore extends Store {
    constructor() {
        super();
        this.newsService = NewsFactory.newsService();
    }

    handler({type, args}) {
        if(type === Command.articleChanged){
            this.newsService.articles(args)
            .then(({articles}) => this.state = articles);
        }
    }
}

const articleStore = new ArticleStore();
export default articleStore;
