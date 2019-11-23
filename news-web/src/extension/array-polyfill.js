class ArrayPolyfill {
    constructor() {
        Array.prototype.first = this.first;
    }

    first() {
        return this[0];
    }
}

export default new ArrayPolyfill();