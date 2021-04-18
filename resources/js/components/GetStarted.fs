module GetStarted

open Feliz
open Fable.Core.JsInterop

open Main
open ClientDetails
open ProjectDetails
open Summary

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

    let handleSubmit (event: Browser.Types.Event) =
        event.preventDefault()

        match formFields.gdpr_consent.value with
        | false -> ()
        | true -> 
            clearErrors()
            Browser.Dom.console.log("form submitted")
            ()

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
    