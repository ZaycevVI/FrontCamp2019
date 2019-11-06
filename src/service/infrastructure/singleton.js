export class Singleton {
    static instance(type) {
        return new Resolver(type, instances[type.name]);
    }    
}

class Resolver {
    constructor(type, instance) {
        this.instance = instance;
        this.type = type;
    }

    resolve(...args) {
        if(!this.instance) {
            instances[this.type.name] =  new this.type(...args.values());
        } 

        return instances[this.type.name];
    } 
}

class InstanceStorage {
    static instances = {};
}

const instances = InstanceStorage.instances;
