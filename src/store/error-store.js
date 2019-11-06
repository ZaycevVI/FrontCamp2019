import { Command } from "../helper/command";
import { Store } from "./store";
import { Singleton } from "../service/infrastructure/singleton";

class ErrorStore extends Store {
    constructor() {
        super();
    }

    handler({type, args}) {
        if(type === Command.errorOccurred) {
            this.state = args;
        }
    }
}

export default Singleton.instance(ErrorStore).resolve();