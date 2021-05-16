module GetStarted

open Feliz
open Fable.Core.JsInterop
open Fable.SimpleHttp
open Fable.SimpleJson
open Browser.Dom

open Types
open ClientDetails
open ProjectDetails
open Summary

type ErrorField = string array

type ErrorFields = 
    { first_name: ErrorField option
      last_name: ErrorField option
      company_name: ErrorField option
      vat_number: ErrorField option
      address: ErrorField option
      city: ErrorField option
      zip_code: ErrorField option
      country: ErrorField option
      email_address: ErrorField option
      phone: ErrorField option
      topic: ErrorField option
      budget: ErrorField option
      subject: ErrorField option
      q1: ErrorField option
      q2: ErrorField option
      q3: ErrorField option
      q4: ErrorField option
      q5: ErrorField option
      q6: ErrorField option
      q7: ErrorField option
      q8: ErrorField option
      q9: ErrorField option
      gdpr_consent: ErrorField option }

type ValidationErrorResponse =
    { errors: ErrorFields 
      message: string }

type FormFields = 
    { first_name: Field;
      last_name: Field;
      company_name: Field;
      vat_number: Field;
      address: Field;
      city: Field;
      zip_code: Field;
      country: Field;
      email_address: Field;
      phone: Field;
      topic: Field;
      budget: Field;
      subject: Field;
      q1: Field;
      q2: Field;
      q3: Field;
      q4: Field;
      q5: Field;
      q6: Field;
      q7: Field;
      q8: Field;
      q9: Field;
      gdpr_consent: BooleanField; }

let getValueOrReturnEmptyString errorField =
    match errorField with
    | Some(value) -> Array.get value 0
    | None -> ""

[<ReactComponent>]
let GetStarted() : ReactElement =
    let (sent, setSent) = React.useState(false)

    let (formFields, setFormFields) = React.useState({
        first_name = { value = ""; error = ""; };
        last_name = { value = ""; error = ""; };
        company_name = { value = ""; error = ""; };
        vat_number = { value = ""; error = ""; };
        address = { value = ""; error = ""; };
        city = { value = ""; error = ""; };
        zip_code = { value = ""; error = ""; };
        country = { value = ""; error = ""; };
        email_address = { value = ""; error = ""; };
        phone = { value = ""; error = ""; };
        topic = { value = ""; error = ""; };
        budget = { value = ""; error = ""; };
        subject = { value = ""; error = ""; };
        q1 = { value = ""; error = ""; };
        q2 = { value = ""; error = ""; };
        q3 = { value = ""; error = ""; };
        q4 = { value = ""; error = ""; };
        q5 = { value = ""; error = ""; };
        q6 = { value = ""; error = ""; };
        q7 = { value = ""; error = ""; };
        q8 = { value = ""; error = ""; };
        q9 = { value = ""; error = ""; };
        gdpr_consent = { value = false; error = ""; };
    })

    let handleInputChange (event: Browser.Types.Event) =
        let input = event.target :?> Browser.Types.HTMLInputElement

        let updatedFormFields = 
            match event.target?name with
            | "first_name" -> { formFields with first_name = { value = input.value; error = ""; }}
            | "last_name" -> { formFields with last_name = { value = input.value; error = ""; }}
            | "company_name" -> { formFields with company_name = { value = input.value; error = ""; }}
            | "vat_number" -> { formFields with vat_number = { value = input.value; error = ""; }}
            | "address" -> { formFields with address = { value = input.value; error = ""; }}
            | "city" -> { formFields with city = { value = input.value; error = ""; }}
            | "zip_code" -> { formFields with zip_code = { value = input.value; error = ""; }}
            | "country" -> { formFields with country = { value = input.value; error = ""; }}
            | "email_address" -> { formFields with email_address = { value = input.value; error = ""; }}
            | "phone" -> { formFields with phone = { value = input.value; error = ""; }}
            | "topic" -> { formFields with topic = { value = input.value; error = ""; }}
            | "budget" -> { formFields with budget = { value = input.value; error = ""; }}
            | "subject" -> { formFields with subject = { value = input.value; error = ""; }}
            | "q1" -> { formFields with q1 = { value = input.value; error = ""; }}
            | "q2" -> { formFields with q2 = { value = input.value; error = ""; }}
            | "q3" -> { formFields with q3 = { value = input.value; error = ""; }}
            | "q4" -> { formFields with q4 = { value = input.value; error = ""; }}
            | "q5" -> { formFields with q5 = { value = input.value; error = ""; }}
            | "q6" -> { formFields with q6 = { value = input.value; error = ""; }}
            | "q7" -> { formFields with q7 = { value = input.value; error = ""; }}
            | "q8" -> { formFields with q8 = { value = input.value; error = ""; }}
            | "q9" -> { formFields with q9 = { value = input.value; error = ""; }}
            | "gdpr_consent" -> { formFields with gdpr_consent = { value = input.``checked``; error = ""; }}
            | _ -> formFields

        if updatedFormFields <> formFields then setFormFields updatedFormFields 

    let clearErrors () =
        setFormFields 
            { formFields with
                first_name = { formFields.first_name with error = "" }
                last_name = { formFields.last_name with error = "" }
                company_name = { formFields.company_name with error = "" }
                vat_number = { formFields.vat_number with error = "" }
                address = { formFields.address with error = "" }
                city = { formFields.city with error = "" }
                zip_code = { formFields.zip_code with error = "" }
                country = { formFields.country with error = "" }
                email_address = { formFields.email_address with error = "" }
                phone = { formFields.phone with error = "" }
                topic = { formFields.topic with error = "" }
                budget = { formFields.budget with error = "" }
                subject = { formFields.subject with error = "" }
                q1 = { formFields.q1 with error = "" }
                q2 = { formFields.q2 with error = "" }
                q3 = { formFields.q3 with error = "" }
                q4 = { formFields.q4 with error = "" }
                q5 = { formFields.q5 with error = "" }
                q6 = { formFields.q6 with error = "" }
                q7 = { formFields.q7 with error = "" }
                q8 = { formFields.q8 with error = "" }
                q9 = { formFields.q9 with error = "" }
                gdpr_consent = { formFields.gdpr_consent with error = "" } }

    let updateFormFieldWithErrors (errors: ErrorFields) =
        setFormFields 
            { formFields with 
                first_name = { formFields.first_name with error = getValueOrReturnEmptyString errors.first_name }
                last_name = { formFields.last_name with error = getValueOrReturnEmptyString errors.last_name }
                company_name = { formFields.company_name with error = getValueOrReturnEmptyString errors.company_name }
                vat_number = { formFields.vat_number with error = getValueOrReturnEmptyString errors.vat_number }
                address = { formFields.address with error = getValueOrReturnEmptyString errors.address }
                city = { formFields.city with error = getValueOrReturnEmptyString errors.city }
                zip_code = { formFields.zip_code with error = getValueOrReturnEmptyString errors.zip_code }
                country = { formFields.country with error = getValueOrReturnEmptyString errors.country }
                email_address = { formFields.email_address with error = getValueOrReturnEmptyString errors.email_address }
                phone = { formFields.phone with error = getValueOrReturnEmptyString errors.phone }
                topic = { formFields.topic with error = getValueOrReturnEmptyString errors.topic }
                budget = { formFields.budget with error = getValueOrReturnEmptyString errors.budget }
                subject = { formFields.subject with error = getValueOrReturnEmptyString errors.subject }
                q1 = { formFields.q1 with error = getValueOrReturnEmptyString errors.q1 }
                q2 = { formFields.q2 with error = getValueOrReturnEmptyString errors.q2 }
                q3 = { formFields.q3 with error = getValueOrReturnEmptyString errors.q3 }
                q4 = { formFields.q4 with error = getValueOrReturnEmptyString errors.q4 }
                q5 = { formFields.q5 with error = getValueOrReturnEmptyString errors.q5 }
                q6 = { formFields.q6 with error = getValueOrReturnEmptyString errors.q6 }
                q7 = { formFields.q7 with error = getValueOrReturnEmptyString errors.q7 }
                q8 = { formFields.q8 with error = getValueOrReturnEmptyString errors.q8 }
                q9 = { formFields.q9 with error = getValueOrReturnEmptyString errors.q9 }
                gdpr_consent = { formFields.gdpr_consent with error = getValueOrReturnEmptyString errors.gdpr_consent } }

    let formFieldsToJsonString () =
        Json.serialize 
            {| first_name = formFields.first_name.value 
               last_name = formFields.last_name.value
               company_name = formFields.company_name.value
               vat_number = formFields.vat_number.value
               address = formFields.address.value
               city = formFields.city.value
               zip_code = formFields.zip_code.value
               country = formFields.country.value
               email_address = formFields.email_address.value
               phone = formFields.phone.value
               topic = formFields.topic.value
               budget = formFields.budget.value
               subject = formFields.subject.value
               q1 = formFields.q1.value
               q2 = formFields.q2.value
               q3 = formFields.q3.value
               q4 = formFields.q4.value
               q5 = formFields.q5.value
               q6 = formFields.q6.value
               q7 = formFields.q7.value
               q8 = formFields.q8.value
               q9 = formFields.q9.value
               gdpr_consent = formFields.gdpr_consent.value |}

    let handleSubmit (event: Browser.Types.Event) =
        event.preventDefault()

        if formFields.gdpr_consent.value = false then ()
        
        clearErrors()

        let xCsrfToken = (document.getElementsByName "csrf-token").[0].getAttribute "content"

        async {
            let! response =
                Http.request "/start"
                |> Http.method POST
                |> Http.content (BodyContent.Text (formFieldsToJsonString()))
                |> Http.header (Headers.contentType "application/json")
                |> Http.header (Headers.create "X-CSRF-TOKEN" xCsrfToken)
                |> Http.send

            match response.statusCode with
            | 200 -> setSent true
            | 422 -> 
                let result = response.responseText |> Json.tryParseAs<ValidationErrorResponse>

                match result with
                | Error errorMsg -> console.log errorMsg
                | Ok data -> updateFormFieldWithErrors data.errors

            | 419 -> 
                window.alert 
                    "Session expired. The page is going to refresh. Try again."

                window.location.reload()
            | _ -> 
                window.alert 
                    "An unexpected error has occured! Send me an email to report this. Thank you."

                window.location.reload()
        }
        |> Async.StartImmediate

    Html.div [
        if sent = true then 
            Html.div [
                prop.className "row mb-4"
                prop.children [
                    Html.div [
                        prop.className "col-lg-4 text-center mb-5"
                        prop.children [
                            Html.i [
                                prop.ariaHidden true
                                prop.className "fas fa-globe-europe start-success-icon"
                            ]
                        ]
                    ]
                    Html.div [
                        prop.className "cold-lg-8"
                        prop.children [
                            Html.h2 [
                                prop.className "display-2"
                                prop.text "Success"
                            ]
                            Html.p [
                                prop.className "lead"
                                prop.text "Thank you for trusting me."
                            ]
                            Html.p "I have received your project details and I will contact you as soon as possible."
                        ]
                    ]
                ]
            ]
        else 
            Html.form [
                prop.onSubmit handleSubmit
                prop.children [
                    Html.div [
                        prop.className "row"
                        prop.children [
                            Html.div [
                                prop.className "col-lg-7"
                                prop.children [
                                    ClientDetails(handleInputChange,
                                                  formFields.first_name,
                                                  formFields.last_name,
                                                  formFields.company_name,
                                                  formFields.vat_number,
                                                  formFields.address,
                                                  formFields.city,
                                                  formFields.zip_code,
                                                  formFields.country,
                                                  formFields.email_address,
                                                  formFields.phone)
                                    ProjectDetails(handleInputChange,
                                                   formFields.topic,
                                                   formFields.budget,
                                                   formFields.subject,
                                                   formFields.q1,
                                                   formFields.q2,
                                                   formFields.q3,
                                                   formFields.q4,
                                                   formFields.q5,
                                                   formFields.q6,
                                                   formFields.q7,
                                                   formFields.q8,
                                                   formFields.q9)
                                ]
                            ]
                            Html.div [
                                prop.className "col-lg-5 mt-5 mt-sm-0"
                                prop.children [
                                    Summary(handleInputChange,
                                            formFields.first_name,
                                            formFields.last_name,
                                            formFields.company_name,
                                            formFields.vat_number,
                                            formFields.address,
                                            formFields.city,
                                            formFields.zip_code,
                                            formFields.country,
                                            formFields.email_address,
                                            formFields.phone,
                                            formFields.topic,
                                            formFields.budget,
                                            formFields.subject,
                                            formFields.gdpr_consent)
                                ]
                            ]
                        ]
                    ]
                ]
            ]
    ]
    