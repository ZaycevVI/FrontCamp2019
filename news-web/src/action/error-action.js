import dispatcher from "../service/infrastructure/dispatcher";
import { DispatchModel } from "../model/dispatch-model";
import { Command } from "../helper/command";
import { Singleton } from "../service/infrastructure/singleton";
import { ErrorGenerator } from "../component/error/error-generator";

export class ErrorAction {
    static errorChanged(msg) {
        Singleton.instance(ErrorGenerator).resolve();
        dispatcher.dispatch(new DispatchModel(Command.errorOccurred, msg));
    }
}
