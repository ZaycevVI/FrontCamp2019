export default function LoggerDecorator(instance) {
    return new Proxy(instance, 
    { 
        get: function(target, prop, receiver) {

        if(typeof target[prop] === 'function') {
            return function(...args) {
                console.log(`called ${prop} with args: `, ...args);
                return target[prop](...args);
            }
        } 
        
        return target[prop];
    }});
}