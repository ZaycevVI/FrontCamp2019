import { MenuGenerator } from "../component/menu/menu-generator/menu-generator";
import { CardGenerator } from "../component/card/card-generator";
import ErrorHandler from "../service/proxy/error-handler";

export class ComponentFactory {
    static newsComponent() {
        return [ErrorHandler(new MenuGenerator()), ErrorHandler(new CardGenerator())];
    }
} 