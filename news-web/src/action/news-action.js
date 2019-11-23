import dispatcher from "../service/infrastructure/dispatcher";
import { DispatchModel } from "../model/dispatch-model";
import { Command } from "../helper/command";

export class NewsAction {
    static updateSource(id) {
        dispatcher.dispatch(new DispatchModel(Command.sourceChanged, id));
    }

    static updateArticle(id) {
        dispatcher.dispatch(new DispatchModel(Command.articleChanged, id));
    }

    static sourceInitialize() {
        dispatcher.dispatch(new DispatchModel(Command.sourceInitialize));
    }
}