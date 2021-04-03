import { Record } from "../.fable/fable-library.3.1.1/Types.js";
import { record_type, string_type } from "../.fable/fable-library.3.1.1/Reflection.js";
import { createElement } from "react";
import { Interop_reactApi } from "../.fable/Feliz.1.40.0/Interop.fs.js";
import { ofSeq } from "../.fable/fable-library.3.1.1/List.js";
import { empty, singleton, append, delay } from "../.fable/fable-library.3.1.1/Seq.js";
import { map, append as append_1 } from "../.fable/fable-library.3.1.1/Array.js";

export class SelectOption extends Record {
    constructor(value, text) {
        super();
        this.value = value;
        this.text = text;
    }
}

export function SelectOption$reflection() {
    return record_type("FormSelect.SelectOption", [], SelectOption, () => [["value", string_type], ["text", string_type]]);
}

export const selectPlaceholder = createElement("option", {
    value: "",
    key: "",
    children: "Open this select menu",
});

export function FormSelect(formSelectInputProps) {
    const onChange = formSelectInputProps.onChange;
    const field = formSelectInputProps.field;
    const options = formSelectInputProps.options;
    const placeholder = formSelectInputProps.placeholder;
    const name = formSelectInputProps.name;
    return createElement("div", {
        className: "mb-3",
        children: Interop_reactApi.Children.toArray(Array.from(ofSeq(delay(() => append(singleton(createElement("label", {
            htmlFor: name,
            children: placeholder,
        })), delay(() => append(singleton(createElement("select", {
            className: (field.error.length > 0) ? "form-control is-invalid" : "form-control",
            name: name,
            id: name,
            value: field.value,
            onChange: onChange,
            ["aria-label"]: placeholder,
            children: Interop_reactApi.Children.toArray(Array.from(append_1([selectPlaceholder], map((x) => createElement("option", {
                value: x.value,
                key: x.value,
                children: x.text,
            }), options)))),
        })), delay(() => ((field.error.length > 0) ? singleton(createElement("label", {
            className: "invalid-feedback",
            htmlFor: name,
            children: field.error,
        })) : empty()))))))))),
    });
}

