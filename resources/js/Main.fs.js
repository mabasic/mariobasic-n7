import { Record } from "./.fable/fable-library.3.1.1/Types.js";
import { bool_type, record_type, string_type } from "./.fable/fable-library.3.1.1/Reflection.js";
import "bootstrap/js/dist/dropdown.js";
import "bootstrap/js/dist/collapse.js";
import "../scss/index.scss";




export class Field extends Record {
    constructor(error, value) {
        super();
        this.error = error;
        this.value = value;
    }
}

export function Field$reflection() {
    return record_type("Main.Field", [], Field, () => [["error", string_type], ["value", string_type]]);
}

export class BooleanField extends Record {
    constructor(error, value) {
        super();
        this.error = error;
        this.value = value;
    }
}

export function BooleanField$reflection() {
    return record_type("Main.BooleanField", [], BooleanField, () => [["error", string_type], ["value", bool_type]]);
}

export class SelectOption extends Record {
    constructor(value, text) {
        super();
        this.value = value;
        this.text = text;
    }
}

export function SelectOption$reflection() {
    return record_type("Main.SelectOption", [], SelectOption, () => [["value", string_type], ["text", string_type]]);
}

