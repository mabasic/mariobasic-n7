import { createElement } from "react";
import { Interop_reactApi } from "../.fable/Feliz.1.40.0/Interop.fs.js";
import { ofSeq } from "../.fable/fable-library.3.1.1/List.js";
import { empty, singleton, append, delay } from "../.fable/fable-library.3.1.1/Seq.js";
import { defaultArg } from "../.fable/fable-library.3.1.1/Option.js";

export function FormTextarea(formTextareaInputProps) {
    const onChange = formTextareaInputProps.onChange;
    const field = formTextareaInputProps.field;
    const height = formTextareaInputProps.height;
    const placeholder = formTextareaInputProps.placeholder;
    const name = formTextareaInputProps.name;
    return createElement("div", {
        className: "mb-3",
        children: Interop_reactApi.Children.toArray(Array.from(ofSeq(delay(() => append(singleton(createElement("label", {
            htmlFor: name,
            children: placeholder,
        })), delay(() => append(singleton(createElement("textarea", {
            style: {
                height: defaultArg(height, 100),
            },
            className: (field.error.length > 0) ? "form-control is-invalid" : "form-control",
            name: name,
            value: field.value,
            onChange: onChange,
        })), delay(() => ((field.error.length > 0) ? singleton(createElement("label", {
            className: "invalid-feedback",
            htmlFor: name,
            children: field.error,
        })) : empty()))))))))),
    });
}

