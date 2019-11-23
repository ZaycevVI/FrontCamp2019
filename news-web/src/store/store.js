import { Observable } from "../service/infrastructure/observable";
import dispatcher from "../service/infrastructure/dispatcher";

export class Store extends Observable {
    constructor() {
        super();
        dispatcher.addSubscriber(this.handler.bind(this));
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
        this.notify(this.state);
    }
    
    handler() {}

    _state;
}