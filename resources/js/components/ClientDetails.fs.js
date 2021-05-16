import { createElement } from "react";
import { Interop_reactApi } from "../.fable/Feliz.1.40.0/Interop.fs.js";
import { ofArray } from "../.fable/fable-library.3.1.16/List.js";
import { FormInput } from "./FormInput.fs.js";
import { FormSelect } from "./FormSelect.fs.js";
import { Countries } from "../constants/Countries.fs.js";

export function ClientDetails(clientDetailsInputProps) {
    let children;
    const phone = clientDetailsInputProps.phone;
    const emailAddress = clientDetailsInputProps.emailAddress;
    const country = clientDetailsInputProps.country;
    const zipCode = clientDetailsInputProps.zipCode;
    const city = clientDetailsInputProps.city;
    const address = clientDetailsInputProps.address;
    const vatNumber = clientDetailsInputProps.vatNumber;
    const companyName = clientDetailsInputProps.companyName;
    const lastName = clientDetailsInputProps.lastName;
    const firstName = clientDetailsInputProps.firstName;
    const onInputChange = clientDetailsInputProps.onInputChange;
    const children_2 = ofArray([createElement("h2", {
        className: "mt-0 mb-3",
        children: "Tell Me About Yourself",
    }), createElement("div", {
        className: "border-cont",
        children: Interop_reactApi.Children.toArray([createElement("div", {
            className: "row pt-2",
            children: Interop_reactApi.Children.toArray([createElement("div", {
                className: "col-md-12 mb-3",
                children: Interop_reactApi.Children.toArray([(children = ofArray(["Fields marked with ", createElement("b", {
                    children: ["*"],
                }), " are required."]), createElement("p", {
                    children: Interop_reactApi.Children.toArray(Array.from(children)),
                }))]),
            }), createElement("div", {
                className: "col-md-6",
                children: Interop_reactApi.Children.toArray([createElement(FormInput, {
                    name: "first_name",
                    placeholder: "First Name*",
                    inputType: "text",
                    field: firstName,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-6",
                children: Interop_reactApi.Children.toArray([createElement(FormInput, {
                    name: "last_name",
                    placeholder: "Last Name*",
                    inputType: "text",
                    field: lastName,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormInput, {
                    name: "company_name",
                    placeholder: "Company Name",
                    inputType: "text",
                    field: companyName,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormInput, {
                    name: "vat_number",
                    placeholder: "VAT Number",
                    inputType: "text",
                    field: vatNumber,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormInput, {
                    name: "address",
                    placeholder: "Address*",
                    inputType: "text",
                    field: address,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-6",
                children: Interop_reactApi.Children.toArray([createElement(FormInput, {
                    name: "city",
                    placeholder: "City / Town*",
                    inputType: "text",
                    field: city,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-6",
                children: Interop_reactApi.Children.toArray([createElement(FormInput, {
                    name: "zip_code",
                    placeholder: "Zip Code*",
                    inputType: "text",
                    field: zipCode,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormSelect, {
                    name: "country",
                    placeholder: "Select a country*",
                    options: Countries,
                    field: country,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-6",
                children: Interop_reactApi.Children.toArray([createElement(FormInput, {
                    name: "email_address",
                    placeholder: "Email Address*",
                    inputType: "email",
                    field: emailAddress,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-6",
                children: Interop_reactApi.Children.toArray([createElement(FormInput, {
                    name: "phone",
                    placeholder: "Phone*",
                    inputType: "tel",
                    field: phone,
                    onChange: onInputChange,
                })]),
            })]),
        })]),
    })]);
    return createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children_2)),
    });
}

