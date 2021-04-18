import { createElement } from "react";
import { Interop_reactApi } from "../.fable/Feliz.1.40.0/Interop.fs.js";
import { ofArray } from "../.fable/fable-library.3.1.1/List.js";

function getFullName(firstName, lastName) {
    if ((firstName.value.length > 0) ? true : (lastName.value.length > 0)) {
        return createElement("p", {
            className: "d-flex justify-content-between summary-item",
            children: Interop_reactApi.Children.toArray([createElement("span", {
                children: ["Full name"],
            }), createElement("span", {
                className: "summary-item-value",
                children: Interop_reactApi.Children.toArray([firstName.value, " ", lastName.value]),
            })]),
        });
    }
    else {
        return null;
    }
}

function getField(field, text) {
    if (field.value === "") {
        return null;
    }
    else {
        return createElement("p", {
            className: "d-flex justify-content-between summary-item",
            children: Interop_reactApi.Children.toArray([createElement("span", {
                children: [text],
            }), createElement("span", {
                className: "summary-item-value",
                children: Interop_reactApi.Children.toArray([field.value]),
            })]),
        });
    }
}

function addCountry(country, input) {
    if (country.value.length > 0) {
        return input + country.value;
    }
    else {
        return input;
    }
}

function addAddress(address, city, zipCode, country, input) {
    if ((address.value.length > 0) ? (((city.value.length > 0) ? true : (zipCode.value.length > 0)) ? true : (country.value.length > 0)) : false) {
        return (input + address.value) + ", ";
    }
    else if (address.value.length > 0) {
        return input + address.value;
    }
    else {
        return input;
    }
}

function addCity(city, zipCode, country, input) {
    if ((city.value.length > 0) ? ((zipCode.value.length > 0) ? true : (country.value.length > 0)) : false) {
        return (input + city.value) + " ";
    }
    else if (city.value.length > 0) {
        return input + city.value;
    }
    else {
        return input;
    }
}

function addZipCode(zipCode, country, input) {
    if ((zipCode.value.length > 0) ? (country.value.length > 0) : false) {
        return (input + zipCode.value) + ", ";
    }
    else if (zipCode.value.length > 0) {
        return input + zipCode.value;
    }
    else {
        return input;
    }
}

function getFullAddress(address, city, zipCode, country) {
    const output = addCountry(country, addZipCode(zipCode, country, addCity(city, zipCode, country, addAddress(address, city, zipCode, country, ""))));
    if (output.length > 0) {
        return createElement("p", {
            className: "d-flex justify-content-between summary-item",
            children: Interop_reactApi.Children.toArray([createElement("span", {
                children: ["Address"],
            }), createElement("span", {
                className: "summary-item-value",
                children: Interop_reactApi.Children.toArray([output]),
            })]),
        });
    }
    else {
        return null;
    }
}

export function Summary(summaryInputProps) {
    let children, children_2;
    const gdprConsent = summaryInputProps.gdprConsent;
    const subject = summaryInputProps.subject;
    const budget = summaryInputProps.budget;
    const topic = summaryInputProps.topic;
    const phone = summaryInputProps.phone;
    const emailAddress = summaryInputProps.emailAddress;
    const country = summaryInputProps.country;
    const zipCode = summaryInputProps.zipCode;
    const city = summaryInputProps.city;
    const address = summaryInputProps.address;
    const vatNumber = summaryInputProps.vatNumber;
    const companyName = summaryInputProps.companyName;
    const lastName = summaryInputProps.lastName;
    const firstName = summaryInputProps.firstName;
    const onInputChange = summaryInputProps.onInputChange;
    return createElement("div", {
        className: "pb-2",
        children: Interop_reactApi.Children.toArray([createElement("h2", {
            className: "mt-0 mb-2",
            children: Interop_reactApi.Children.toArray(["Summary"]),
        }), (children = ofArray([getFullName(firstName, lastName), getField(companyName, "Company"), getField(vatNumber, "VAT number"), getFullAddress(address, city, zipCode, country), getField(emailAddress, "Email address"), getField(phone, "Phone"), getField(topic, "Topic"), getField(budget, "Budget"), getField(subject, "Subject")]), createElement("div", {
            children: Interop_reactApi.Children.toArray(Array.from(children)),
        })), (children_2 = ofArray([createElement("div", {
            className: "mb-3 mt-5",
            children: Interop_reactApi.Children.toArray([createElement("div", {
                className: "form-check form-switch",
                children: Interop_reactApi.Children.toArray([createElement("input", {
                    className: "form-check-input",
                    name: "gdpr_consent",
                    type: "checkbox",
                    value: gdprConsent.value,
                    id: "gdpr_consent",
                    onChange: onInputChange,
                }), createElement("label", {
                    className: "form-check-label",
                    htmlFor: "gdpr_consent",
                    children: Interop_reactApi.Children.toArray(["I have read the ", createElement("a", {
                        className: "link-light",
                        href: "/privacy",
                        children: "Privacy Notice",
                    }), " and I give my permission to be contacted with regard to this form."]),
                })]),
            })]),
        }), createElement("div", {
            className: "text-end text-lg-center mb-2",
            children: Interop_reactApi.Children.toArray([createElement("button", {
                type: "submit",
                className: "btn btn-primary",
                disabled: !gdprConsent.value,
                children: Interop_reactApi.Children.toArray(["Launch ", createElement("i", {
                    className: "fa fa-fw fa-rocket",
                })]),
            })]),
        })]), createElement("div", {
            children: Interop_reactApi.Children.toArray(Array.from(children_2)),
        }))]),
    });
}

