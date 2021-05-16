import { createElement } from "react";
import { Interop_reactApi } from "../.fable/Feliz.1.40.0/Interop.fs.js";
import { empty, singleton, append, delay, toList } from "../.fable/fable-library.3.1.16/Seq.js";

export function FormInput(formInputInputProps) {
    const onChange = formInputInputProps.onChange;
    const field = formInputInputProps.field;
    const inputType = formInputInputProps.inputType;
    const placeholder = formInputInputProps.placeholder;
    const name = formInputInputProps.name;
    return createElement("div", {
        className: "mb-3",
        children: Interop_reactApi.Children.toArray(Array.from(toList(delay(() => append(singleton(createElement("label", {
            htmlFor: name,
            children: placeholder,
        })), delay(() => append(singleton(createElement("input", {
            className: (field.error.length > 0) ? "form-control is-invalid" : "form-control",
            name: name,
            type: inputType,
            id: name,
            value: field.value,
            onChange: onChange,
        })), delay(() => ((field.error.length > 0) ? singleton(createElement("label", {
            className: "invalid-feedback",
            htmlFor: name,
            children: field.error,
        })) : empty()))))))))),
    });
}

