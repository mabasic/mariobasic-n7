import { Record } from "../.fable/fable-library.3.1.16/Types.js";
import { anonRecord_type, bool_type, record_type, option_type, array_type, string_type } from "../.fable/fable-library.3.1.16/Reflection.js";
import { BooleanField, Field, BooleanField$reflection, Field$reflection } from "../Types.fs.js";
import { useFeliz_React__React_useState_Static_1505 } from "../.fable/Feliz.1.40.0/React.fs.js";
import { equals } from "../.fable/fable-library.3.1.16/Util.js";
import { createTypeInfo } from "../.fable/Fable.SimpleJson.3.19.0/TypeInfo.Converter.fs.js";
import { Convert_fromJson, Convert_serialize } from "../.fable/Fable.SimpleJson.3.19.0/Json.Converter.fs.js";
import { startImmediate } from "../.fable/fable-library.3.1.16/Async.js";
import { singleton } from "../.fable/fable-library.3.1.16/AsyncBuilder.js";
import { Headers_create, Headers_contentType, Http_header, Http_content, Http_request, Http_method, Http_send } from "../.fable/Fable.SimpleHttp.3.0.0/Http.fs.js";
import { BodyContent, HttpMethod } from "../.fable/Fable.SimpleHttp.3.0.0/Types.fs.js";
import { some } from "../.fable/fable-library.3.1.16/Option.js";
import { FSharpResult$2 } from "../.fable/fable-library.3.1.16/Choice.js";
import { SimpleJson_tryParse } from "../.fable/Fable.SimpleJson.3.19.0/SimpleJson.fs.js";
import { singleton as singleton_1, delay, toList } from "../.fable/fable-library.3.1.16/Seq.js";
import { createElement } from "react";
import { Interop_reactApi } from "../.fable/Feliz.1.40.0/Interop.fs.js";
import { ClientDetails } from "./ClientDetails.fs.js";
import { ProjectDetails } from "./ProjectDetails.fs.js";
import { Summary } from "./Summary.fs.js";

export class ErrorFields extends Record {
    constructor(first_name, last_name, company_name, vat_number, address, city, zip_code, country, email_address, phone, topic, budget, subject, q1, q2, q3, q4, q5, q6, q7, q8, q9, gdpr_consent) {
        super();
        this.first_name = first_name;
        this.last_name = last_name;
        this.company_name = company_name;
        this.vat_number = vat_number;
        this.address = address;
        this.city = city;
        this.zip_code = zip_code;
        this.country = country;
        this.email_address = email_address;
        this.phone = phone;
        this.topic = topic;
        this.budget = budget;
        this.subject = subject;
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
        this.q4 = q4;
        this.q5 = q5;
        this.q6 = q6;
        this.q7 = q7;
        this.q8 = q8;
        this.q9 = q9;
        this.gdpr_consent = gdpr_consent;
    }
}

export function ErrorFields$reflection() {
    return record_type("GetStarted.ErrorFields", [], ErrorFields, () => [["first_name", option_type(array_type(string_type))], ["last_name", option_type(array_type(string_type))], ["company_name", option_type(array_type(string_type))], ["vat_number", option_type(array_type(string_type))], ["address", option_type(array_type(string_type))], ["city", option_type(array_type(string_type))], ["zip_code", option_type(array_type(string_type))], ["country", option_type(array_type(string_type))], ["email_address", option_type(array_type(string_type))], ["phone", option_type(array_type(string_type))], ["topic", option_type(array_type(string_type))], ["budget", option_type(array_type(string_type))], ["subject", option_type(array_type(string_type))], ["q1", option_type(array_type(string_type))], ["q2", option_type(array_type(string_type))], ["q3", option_type(array_type(string_type))], ["q4", option_type(array_type(string_type))], ["q5", option_type(array_type(string_type))], ["q6", option_type(array_type(string_type))], ["q7", option_type(array_type(string_type))], ["q8", option_type(array_type(string_type))], ["q9", option_type(array_type(string_type))], ["gdpr_consent", option_type(array_type(string_type))]]);
}

export class ValidationErrorResponse extends Record {
    constructor(errors, message) {
        super();
        this.errors = errors;
        this.message = message;
    }
}

export function ValidationErrorResponse$reflection() {
    return record_type("GetStarted.ValidationErrorResponse", [], ValidationErrorResponse, () => [["errors", ErrorFields$reflection()], ["message", string_type]]);
}

export class FormFields extends Record {
    constructor(first_name, last_name, company_name, vat_number, address, city, zip_code, country, email_address, phone, topic, budget, subject, q1, q2, q3, q4, q5, q6, q7, q8, q9, gdpr_consent) {
        super();
        this.first_name = first_name;
        this.last_name = last_name;
        this.company_name = company_name;
        this.vat_number = vat_number;
        this.address = address;
        this.city = city;
        this.zip_code = zip_code;
        this.country = country;
        this.email_address = email_address;
        this.phone = phone;
        this.topic = topic;
        this.budget = budget;
        this.subject = subject;
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
        this.q4 = q4;
        this.q5 = q5;
        this.q6 = q6;
        this.q7 = q7;
        this.q8 = q8;
        this.q9 = q9;
        this.gdpr_consent = gdpr_consent;
    }
}

export function FormFields$reflection() {
    return record_type("GetStarted.FormFields", [], FormFields, () => [["first_name", Field$reflection()], ["last_name", Field$reflection()], ["company_name", Field$reflection()], ["vat_number", Field$reflection()], ["address", Field$reflection()], ["city", Field$reflection()], ["zip_code", Field$reflection()], ["country", Field$reflection()], ["email_address", Field$reflection()], ["phone", Field$reflection()], ["topic", Field$reflection()], ["budget", Field$reflection()], ["subject", Field$reflection()], ["q1", Field$reflection()], ["q2", Field$reflection()], ["q3", Field$reflection()], ["q4", Field$reflection()], ["q5", Field$reflection()], ["q6", Field$reflection()], ["q7", Field$reflection()], ["q8", Field$reflection()], ["q9", Field$reflection()], ["gdpr_consent", BooleanField$reflection()]]);
}

export function getValueOrReturnEmptyString(errorField) {
    if (errorField == null) {
        return "";
    }
    else {
        const value = errorField;
        return value[0];
    }
}

export function GetStarted() {
    const patternInput = useFeliz_React__React_useState_Static_1505(false);
    const setSent = patternInput[1];
    const sent = patternInput[0];
    const patternInput_1 = useFeliz_React__React_useState_Static_1505(new FormFields(new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new Field("", ""), new BooleanField("", false)));
    const setFormFields = patternInput_1[1];
    const formFields = patternInput_1[0];
    const handleInputChange = (event) => {
        const input = event.target;
        let updatedFormFields;
        const matchValue = event.target.name;
        switch (matchValue) {
            case "first_name": {
                updatedFormFields = (new FormFields(new Field("", input.value), formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "last_name": {
                updatedFormFields = (new FormFields(formFields.first_name, new Field("", input.value), formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "company_name": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, new Field("", input.value), formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "vat_number": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, new Field("", input.value), formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "address": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, new Field("", input.value), formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "city": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, new Field("", input.value), formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "zip_code": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, new Field("", input.value), formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "country": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, new Field("", input.value), formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "email_address": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, new Field("", input.value), formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "phone": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, new Field("", input.value), formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "topic": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, new Field("", input.value), formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "budget": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, new Field("", input.value), formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "subject": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, new Field("", input.value), formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "q1": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, new Field("", input.value), formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "q2": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, new Field("", input.value), formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "q3": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, new Field("", input.value), formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "q4": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, new Field("", input.value), formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "q5": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, new Field("", input.value), formFields.q6, formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "q6": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, new Field("", input.value), formFields.q7, formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "q7": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, new Field("", input.value), formFields.q8, formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "q8": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, new Field("", input.value), formFields.q9, formFields.gdpr_consent));
                break;
            }
            case "q9": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, new Field("", input.value), formFields.gdpr_consent));
                break;
            }
            case "gdpr_consent": {
                updatedFormFields = (new FormFields(formFields.first_name, formFields.last_name, formFields.company_name, formFields.vat_number, formFields.address, formFields.city, formFields.zip_code, formFields.country, formFields.email_address, formFields.phone, formFields.topic, formFields.budget, formFields.subject, formFields.q1, formFields.q2, formFields.q3, formFields.q4, formFields.q5, formFields.q6, formFields.q7, formFields.q8, formFields.q9, new BooleanField("", input.checked)));
                break;
            }
            default: {
                updatedFormFields = formFields;
            }
        }
        if (!equals(updatedFormFields, formFields)) {
            setFormFields(updatedFormFields);
        }
    };
    const clearErrors = () => {
        setFormFields(new FormFields(new Field("", formFields.first_name.value), new Field("", formFields.last_name.value), new Field("", formFields.company_name.value), new Field("", formFields.vat_number.value), new Field("", formFields.address.value), new Field("", formFields.city.value), new Field("", formFields.zip_code.value), new Field("", formFields.country.value), new Field("", formFields.email_address.value), new Field("", formFields.phone.value), new Field("", formFields.topic.value), new Field("", formFields.budget.value), new Field("", formFields.subject.value), new Field("", formFields.q1.value), new Field("", formFields.q2.value), new Field("", formFields.q3.value), new Field("", formFields.q4.value), new Field("", formFields.q5.value), new Field("", formFields.q6.value), new Field("", formFields.q7.value), new Field("", formFields.q8.value), new Field("", formFields.q9.value), new BooleanField("", formFields.gdpr_consent.value)));
    };
    const updateFormFieldWithErrors = (errors) => {
        setFormFields(new FormFields(new Field(getValueOrReturnEmptyString(errors.first_name), formFields.first_name.value), new Field(getValueOrReturnEmptyString(errors.last_name), formFields.last_name.value), new Field(getValueOrReturnEmptyString(errors.company_name), formFields.company_name.value), new Field(getValueOrReturnEmptyString(errors.vat_number), formFields.vat_number.value), new Field(getValueOrReturnEmptyString(errors.address), formFields.address.value), new Field(getValueOrReturnEmptyString(errors.city), formFields.city.value), new Field(getValueOrReturnEmptyString(errors.zip_code), formFields.zip_code.value), new Field(getValueOrReturnEmptyString(errors.country), formFields.country.value), new Field(getValueOrReturnEmptyString(errors.email_address), formFields.email_address.value), new Field(getValueOrReturnEmptyString(errors.phone), formFields.phone.value), new Field(getValueOrReturnEmptyString(errors.topic), formFields.topic.value), new Field(getValueOrReturnEmptyString(errors.budget), formFields.budget.value), new Field(getValueOrReturnEmptyString(errors.subject), formFields.subject.value), new Field(getValueOrReturnEmptyString(errors.q1), formFields.q1.value), new Field(getValueOrReturnEmptyString(errors.q2), formFields.q2.value), new Field(getValueOrReturnEmptyString(errors.q3), formFields.q3.value), new Field(getValueOrReturnEmptyString(errors.q4), formFields.q4.value), new Field(getValueOrReturnEmptyString(errors.q5), formFields.q5.value), new Field(getValueOrReturnEmptyString(errors.q6), formFields.q6.value), new Field(getValueOrReturnEmptyString(errors.q7), formFields.q7.value), new Field(getValueOrReturnEmptyString(errors.q8), formFields.q8.value), new Field(getValueOrReturnEmptyString(errors.q9), formFields.q9.value), new BooleanField(getValueOrReturnEmptyString(errors.gdpr_consent), formFields.gdpr_consent.value)));
    };
    const formFieldsToJsonString = () => {
        const value_46 = {
            address: formFields.address.value,
            budget: formFields.budget.value,
            city: formFields.city.value,
            company_name: formFields.company_name.value,
            country: formFields.country.value,
            email_address: formFields.email_address.value,
            first_name: formFields.first_name.value,
            gdpr_consent: formFields.gdpr_consent.value,
            last_name: formFields.last_name.value,
            phone: formFields.phone.value,
            q1: formFields.q1.value,
            q2: formFields.q2.value,
            q3: formFields.q3.value,
            q4: formFields.q4.value,
            q5: formFields.q5.value,
            q6: formFields.q6.value,
            q7: formFields.q7.value,
            q8: formFields.q8.value,
            q9: formFields.q9.value,
            subject: formFields.subject.value,
            topic: formFields.topic.value,
            vat_number: formFields.vat_number.value,
            zip_code: formFields.zip_code.value,
        };
        const typeInfo = createTypeInfo(anonRecord_type(["address", string_type], ["budget", string_type], ["city", string_type], ["company_name", string_type], ["country", string_type], ["email_address", string_type], ["first_name", string_type], ["gdpr_consent", bool_type], ["last_name", string_type], ["phone", string_type], ["q1", string_type], ["q2", string_type], ["q3", string_type], ["q4", string_type], ["q5", string_type], ["q6", string_type], ["q7", string_type], ["q8", string_type], ["q9", string_type], ["subject", string_type], ["topic", string_type], ["vat_number", string_type], ["zip_code", string_type]));
        return Convert_serialize(value_46, typeInfo);
    };
    const handleSubmit = (event_1) => {
        event_1.preventDefault();
        if (formFields.gdpr_consent.value === false) {
        }
        clearErrors();
        const xCsrfToken = (document.getElementsByName("csrf-token")[0]).getAttribute("content");
        startImmediate(singleton.Delay(() => {
            let req_3, req_2, req_1;
            return singleton.Bind(Http_send((req_3 = (req_2 = (req_1 = Http_method(new HttpMethod(1), Http_request("/start")), Http_content(new BodyContent(1, formFieldsToJsonString()), req_1)), Http_header(Headers_contentType("application/json"), req_2)), Http_header(Headers_create("X-CSRF-TOKEN", xCsrfToken), req_3))), (_arg1) => {
                let matchValue_2, inputJson, typeInfo_1;
                const response = _arg1;
                const matchValue_1 = response.statusCode | 0;
                switch (matchValue_1) {
                    case 200: {
                        setSent(true);
                        return singleton.Zero();
                    }
                    case 419: {
                        window.alert(some("Session expired. The page is going to refresh. Try again."));
                        window.location.reload();
                        return singleton.Zero();
                    }
                    case 422: {
                        let result;
                        try {
                            result = (new FSharpResult$2(0, (matchValue_2 = SimpleJson_tryParse(response.responseText), (matchValue_2 != null) ? (inputJson = matchValue_2, (typeInfo_1 = createTypeInfo(ValidationErrorResponse$reflection()), Convert_fromJson(inputJson, typeInfo_1))) : (() => {
                                throw (new Error("Couldn\u0027t parse the input JSON string because it seems to be invalid"));
                            })())));
                        }
                        catch (ex) {
                            result = (new FSharpResult$2(1, ex.message));
                        }
                        if (result.tag === 0) {
                            const data = result.fields[0];
                            updateFormFieldWithErrors(data.errors);
                            return singleton.Zero();
                        }
                        else {
                            const errorMsg = result.fields[0];
                            console.log(some(errorMsg));
                            return singleton.Zero();
                        }
                    }
                    default: {
                        window.alert(some("An unexpected error has occured! Send me an email to report this. Thank you."));
                        window.location.reload();
                        return singleton.Zero();
                    }
                }
            });
        }));
    };
    const children = toList(delay(() => ((sent === true) ? singleton_1(createElement("div", {
        className: "row mb-4",
        children: Interop_reactApi.Children.toArray([createElement("div", {
            className: "col-lg-4 text-center mb-5",
            children: Interop_reactApi.Children.toArray([createElement("i", {
                ["aria-hidden"]: true,
                className: "fas fa-globe-europe start-success-icon",
            })]),
        }), createElement("div", {
            className: "cold-lg-8",
            children: Interop_reactApi.Children.toArray([createElement("h2", {
                className: "display-2",
                children: "Success",
            }), createElement("p", {
                className: "lead",
                children: "Thank you for trusting me.",
            }), createElement("p", {
                children: ["I have received your project details and I will contact you as soon as possible."],
            })]),
        })]),
    })) : singleton_1(createElement("form", {
        onSubmit: handleSubmit,
        children: Interop_reactApi.Children.toArray([createElement("div", {
            className: "row",
            children: Interop_reactApi.Children.toArray([createElement("div", {
                className: "col-lg-7",
                children: Interop_reactApi.Children.toArray([createElement(ClientDetails, {
                    onInputChange: handleInputChange,
                    firstName: formFields.first_name,
                    lastName: formFields.last_name,
                    companyName: formFields.company_name,
                    vatNumber: formFields.vat_number,
                    address: formFields.address,
                    city: formFields.city,
                    zipCode: formFields.zip_code,
                    country: formFields.country,
                    emailAddress: formFields.email_address,
                    phone: formFields.phone,
                }), createElement(ProjectDetails, {
                    onInputChange: handleInputChange,
                    topic: formFields.topic,
                    budget: formFields.budget,
                    subject: formFields.subject,
                    q1: formFields.q1,
                    q2: formFields.q2,
                    q3: formFields.q3,
                    q4: formFields.q4,
                    q5: formFields.q5,
                    q6: formFields.q6,
                    q7: formFields.q7,
                    q8: formFields.q8,
                    q9: formFields.q9,
                })]),
            }), createElement("div", {
                className: "col-lg-5 mt-5 mt-sm-0",
                children: Interop_reactApi.Children.toArray([createElement(Summary, {
                    onInputChange: handleInputChange,
                    firstName: formFields.first_name,
                    lastName: formFields.last_name,
                    companyName: formFields.company_name,
                    vatNumber: formFields.vat_number,
                    address: formFields.address,
                    city: formFields.city,
                    zipCode: formFields.zip_code,
                    country: formFields.country,
                    emailAddress: formFields.email_address,
                    phone: formFields.phone,
                    topic: formFields.topic,
                    budget: formFields.budget,
                    subject: formFields.subject,
                    gdprConsent: formFields.gdpr_consent,
                })]),
            })]),
        })]),
    })))));
    return createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children)),
    });
}

