import { MenuGenerator } from "../html-generator/menu/menu-generator";
import { CardGenerator } from "../html-generator/card/card-generator";
import { Binder } from "../html-generator/binder";

export class GeneratorFactory {
    static menuGenerator(callback) {
        return new MenuGenerator(new Binder(), callback);
    }

    static cardGenerator() {
        return new CardGenerator(new Binder());
    }
} 