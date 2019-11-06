import ComponentModel from "../../model/component-model";

export class ComponentConverter {
    static convert(generator, arg) {
        return new ComponentModel(generator.selector, generator.html(arg));
    }
} 