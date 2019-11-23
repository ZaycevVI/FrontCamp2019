export class Observable {
    constructor() {
        this.subscribers = [];
    }

    addSubscriber(handler) {
        this.subscribers.push(handler);
    }

    removeSubscriber(handler) {
        this.subscribers.splice(handler, 1);
    }

    notify(args) {
        for (const subscriber of this.subscribers) {
            subscriber(args);
        }
    }
}