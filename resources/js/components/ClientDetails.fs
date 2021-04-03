module ClientDetails

open Fable.Core
open Feliz

open FormInput
open FormSelect
open App

[<ImportDefault("../constants/countries.js")>]
let countries: SelectOption array = jsNative

[<ReactComponent>]
let ClientDetails(onInputChange: Browser.Types.Event -> unit,
                  firstName: Field,
                  lastName: Field,
                  companyName: Field,
                  vatNumber: Field,
                  address: Field,
                  city: Field,
                  zipCode: Field,
                  country: Field,
                  emailAddress: Field,
                  phone: Field) =
    Html.div [
        Html.h2 [
            prop.className "mt-0 mb-3"
            prop.text "Tell Me About Yourself"
        ]
        Html.div [
            prop.className "border-cont"
            prop.children [
                Html.div [
                    prop.className "row pt-2"
                    prop.children [
                        Html.div [
                            prop.className "col-md-12 mb-3"
                            prop.children [
                                Html.p [
                                    Html.text "Fields marked with " 
                                    Html.b "*"
                                    Html.text " are required."
                                ]   
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-6"
                            prop.children [
                                FormInput("first_name", 
                                          "First Name*", 
                                          "text", 
                                          firstName, 
                                          onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-6"
                            prop.children [
                                FormInput("last_name", 
                                          "Last Name*", 
                                          "text", 
                                          lastName, 
                                          onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormInput("company_name", 
                                          "Company Name", 
                                          "text", 
                                          companyName, 
                                          onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormInput("vat_number", 
                                          "VAT Number", 
                                          "text", 
                                          vatNumber, 
                                          onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormInput("address", 
                                          "Address*", 
                                          "text", 
                                          address, 
                                          onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-6"
                            prop.children [
                                FormInput("city", 
                                          "City / Town*", 
                                          "text", 
                                          city, 
                                          onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-6"
                            prop.children [
                                FormInput("zip_code", 
                                          "Zip Code*", 
                                          "text", 
                                          zipCode, 
                                          onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormSelect("country", 
                                          "Select a country*", 
                                          countries, 
                                          country, 
                                          onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-6"
                            prop.children [
                                FormInput("email_address", 
                                          "Email Address*", 
                                          "email", 
                                          emailAddress, 
                                          onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-6"
                            prop.children [
                                FormInput("phone", 
                                          "Phone*", 
                                          "tel", 
                                          phone, 
                                          onInputChange)
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]