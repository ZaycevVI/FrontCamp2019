import { NewsFactory } from '../factory/news-factory';
import { SourceModel } from "../model/source-model";
import { Command } from "../helper/command";
import { Store } from "./store";

class SourceStore extends Store {
    constructor() {
        super();
        this.newsService = NewsFactory.newsService();
    }

    handler({type, args}) {
        if(type === Command.sourceChanged) {
            this.state = new SourceModel(args, this.state.sources);
        } else if(type == Command.sourceInitialize) {
            this.newsService.sources().then(sources =>{
                this.state = new SourceModel(sources.first().id, sources);
            });
        }
    }
}

export default new SourceStore();