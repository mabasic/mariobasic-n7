module Summary

open Feliz

open App

let private getFullName (firstName: Field) (lastName: Field) =
    if 
        String.length firstName.value > 0 || 
        String.length lastName.value > 0 
    then
        Html.p [
            prop.className "d-flex justify-content-between summary-item"
            prop.children [
                Html.span "Full name"
                Html.span [
                    prop.className "summary-item-value"
                    prop.children [
                        Html.text firstName.value
                        Html.text " "
                        Html.text lastName.value
                    ]
                ]
            ]
        ]
    else
        Html.none

let private getField (field: Field) (text: string) =
    match field.value with
        | "" -> Html.none
        | _ -> 
            Html.p [
                prop.className "d-flex justify-content-between summary-item"
                prop.children [
                    Html.span text
                    Html.span [
                        prop.className "summary-item-value"
                        prop.children [
                            Html.text field.value
                        ]
                    ]
                ]
            ]

let private addCountry (country: Field) (input: string) =  
    if String.length country.value > 0 then 
        input + country.value
    else 
        input

let private addAddress (address: Field)
                       (city: Field) 
                       (zipCode: Field)
                       (country: Field)
                       (input: string) =  
    if String.length address.value > 0 && 
        (String.length city.value > 0 || 
            String.length zipCode.value > 0 || 
            String.length country.value > 0) then 
        input + address.value + ", "
    elif String.length address.value > 0 then 
        input + address.value 
    else 
        input

let private addCity (city: Field) 
                    (zipCode: Field)
                    (country: Field)
                    (input: string) =  
    if String.length city.value > 0 && 
        (String.length zipCode.value > 0 || String.length country.value > 0) then 
        input + city.value + " "
    elif String.length city.value > 0 then 
        input + city.value
    else 
        input

let private addZipCode (zipCode: Field)
                       (country: Field)
                       (input: string) =
    if String.length zipCode.value > 0 && String.length country.value > 0 then 
        input + zipCode.value + ", "
    elif String.length zipCode.value > 0 then
        input + zipCode.value
    else
        input

let private getFullAddress (address: Field)
                           (city: Field)
                           (zipCode: Field)
                           (country: Field) =

    let addressTransform = addAddress address city zipCode country
    let cityTransform = addCity city zipCode country
    let zipCodeTransform = addZipCode zipCode country
    let countryTransform = addCountry country

    let output = 
        "" 
        |> addressTransform 
        |> cityTransform 
        |> zipCodeTransform 
        |> countryTransform

    match String.length output > 0 with
    | true -> Html.p [
                prop.className "d-flex justify-content-between summary-item"
                prop.children [
                    Html.span "Address"
                    Html.span [
                        prop.className "summary-item-value"
                        prop.children [
                            Html.text output
                        ]
                    ]
                ]
            ]
    | false -> Html.none

[<ReactComponent>]
let Summary(onInputChange: Browser.Types.Event -> unit,
            firstName: Field,
            lastName: Field,
            companyName: Field,
            vatNumber: Field,
            address: Field,
            city: Field,
            zipCode: Field,
            country: Field,
            emailAddress: Field,
            topic: Field,
            budget: Field,
            subject: Field,
            gdprConsent: BooleanField,
            phone: Field) : ReactElement =
    Html.div [
        prop.className "pb-2"
        prop.children [
            Html.h2 [
                prop.className "mt-0 mb-2"
                prop.children [
                    Html.text "Summary"
                ]
            ]
            Html.div [
                getFullName firstName lastName
                getField companyName "Company"
                getField vatNumber "VAT number"
                getFullAddress address city zipCode country
                getField emailAddress "Email address"
                getField phone "Phone"
                getField topic "Topic"
                getField budget "Budget"
                getField subject "Subject"
            ]

            Html.div [
                Html.div [
                    prop.className "mb-3 mt-5"
                    prop.children [
                        Html.div [
                            prop.className "form-check form-switch"
                            prop.children [
                                Html.input [
                                    prop.className "form-check-input"
                                    prop.name "gdpr_consent"
                                    prop.type'.checkbox
                                    prop.value gdprConsent.value
                                    prop.id "gdpr_consent"
                                    prop.onChange onInputChange
                                ]
                                Html.label [
                                    prop.className "form-check-label"
                                    prop.htmlFor "gdpr_consent"
                                    prop.children [
                                        Html.text "I have read the "
                                        Html.a [
                                            prop.className "link-light"
                                            prop.href "/privacy"
                                            prop.text "Privacy Notice"
                                        ]
                                        Html.text " and I give my permission to be contacted with regard to this form."
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
                Html.div [
                    prop.className "text-end text-lg-center mb-2"
                    prop.children [
                        Html.button [
                            prop.type'.submit
                            prop.className "btn btn-primary"
                            prop.disabled (not gdprConsent.value)
                            prop.children [
                                Html.text "Launch "
                                Html.i [
                                    prop.className "fa fa-fw fa-rocket"
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]