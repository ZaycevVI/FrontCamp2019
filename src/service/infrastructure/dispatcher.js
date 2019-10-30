import { Observable } from "./observable";
import { Singleton } from "./singleton";

class Dispatcher extends Observable {
    dispatch(args) {
        this.notify(args);
    }
}

export default Singleton.instance(Dispatcher).resolve();