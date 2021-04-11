module ProjectDetails

open Fable.Core
open Feliz

open FormInput
open FormSelect
open FormTextarea
open App

[<ImportDefault("../constants/budgets.js")>]
let budgets: SelectOption array = jsNative

[<ImportDefault("../constants/topics.js")>]
let topics: SelectOption array = jsNative

[<ReactComponent>]
let ProjectDetails(onInputChange: Browser.Types.Event -> unit,
                   topic: Field,
                   budget: Field,
                   subject: Field,
                   q1: Field,
                   q2: Field,
                   q3: Field,
                   q4: Field,
                   q5: Field,
                   q6: Field,
                   q7: Field,
                   q8: Field,
                   q9: Field) : ReactElement =
    Html.div [
        Html.h2 [
            prop.className "mt-5 mb-3"
            prop.text "Project Details"
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
                                FormSelect("topic", 
                                           "Select a topic*",
                                           topics,
                                           topic,
                                           onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-6"
                            prop.children [
                                FormSelect("budget", 
                                           "Select a budget*",
                                           budgets,
                                           budget,
                                           onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormInput("subject", 
                                           "Subject*",
                                           "text",
                                           subject,
                                           onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-21 mb-3 mt-5"
                            prop.children [
                                Html.h3 "Questions"
                                Html.p "All questions are optional, but I highly encourage you to answer them. They give me insights into your project so that I can provide you with the best solution."
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormTextarea("q1", 
                                             "1. Describe your business in a few sentences",
                                             Some(200),
                                             q1,
                                             onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormTextarea("q2", 
                                             "2. Do you currently have a website? If so, what is/isn’t working for you?",
                                             None,
                                             q2,
                                             onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormTextarea("q3", 
                                             "3. What are your goals for this project?",
                                             None,
                                             q3,
                                             onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormTextarea("q4", 
                                             "4. Who is your target audience?",
                                             None,
                                             q4,
                                             onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormTextarea("q5", 
                                             "5. What specific features do you want on the site?",
                                             Some(200),
                                             q5,
                                             onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormTextarea("q6", 
                                             "6. How can I avoid failure?",
                                             None,
                                             q6,
                                             onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormTextarea("q7", 
                                             "7. Who are your main competitors?",
                                             None,
                                             q7,
                                             onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormTextarea("q8", 
                                             "8. What makes you different from your competitors?",
                                             None,
                                             q8,
                                             onInputChange)
                            ]
                        ]
                        Html.div [
                            prop.className "col-md-12"
                            prop.children [
                                FormTextarea("q9", 
                                             "9. What’s the scope of the project?",
                                             Some(200),
                                             q9,
                                             onInputChange)
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]