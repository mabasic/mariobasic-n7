import { ReactDOM_render_Z3D10464 } from "./.fable/Feliz.1.40.0/ReactDOM.fs.js";
import { createElement } from "react";
import GetStarted_1 from "./components/GetStarted.js";
import { Record } from "./.fable/fable-library.3.1.1/Types.js";
import { bool_type, record_type, string_type } from "./.fable/fable-library.3.1.1/Reflection.js";

export function GetStarted() {
    return null;
}

ReactDOM_render_Z3D10464(() => createElement(GetStarted_1, null), document.getElementById("get-started"));

export class Field extends Record {
    constructor(error, value) {
        super();
        this.error = error;
        this.value = value;
    }
}

export function Field$reflection() {
    return record_type("Start.Field", [], Field, () => [["error", string_type], ["value", string_type]]);
}

export class BooleanField extends Record {
    constructor(error, value) {
        super();
        this.error = error;
        this.value = value;
    }
}

export function BooleanField$reflection() {
    return record_type("Start.BooleanField", [], BooleanField, () => [["error", string_type], ["value", bool_type]]);
}

export class SelectOption extends Record {
    constructor(value, text) {
        super();
        this.value = value;
        this.text = text;
    }
}

export function SelectOption$reflection() {
    return record_type("Start.SelectOption", [], SelectOption, () => [["value", string_type], ["text", string_type]]);
}

