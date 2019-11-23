import dispatcher from "../infrastructure/dispatcher";
import { ErrorAction } from "../../action/error-action";

export default function ErrorHandler(instance) {
    return new Proxy(instance, 
    { 
        get: (target, name, receiver) => {
            if(typeof target[name] === 'function') { 
                return (...args) => {
                    try {
                        return target[name](...args)
                    } catch(error) {
                        ErrorAction.errorChanged(error);
                    }
                  };
            }
            
            return target[prop];
      }
    });
}