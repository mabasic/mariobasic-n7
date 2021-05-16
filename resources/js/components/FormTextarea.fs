module FormTextarea

open Feliz
open Types

[<ReactComponent>]
let FormTextarea(name: string, 
                 placeholder: string, 
                 height: int option, 
                 field: Field, 
                 onChange: Browser.Types.Event -> unit) : ReactElement =
    Html.div [
        prop.className "mb-3"
        prop.children [
            Html.label [
                prop.htmlFor name
                prop.text placeholder
            ] 
            Html.textarea [
                prop.style [
                    style.height (Option.defaultValue 100 height)
                ]
                prop.className 
                    (if String.length field.error > 0 then "form-control is-invalid" else "form-control") 
                prop.name name
                prop.value field.value
                prop.onChange onChange
            ]
            if String.length field.error > 0 then Html.label [
                prop.className "invalid-feedback"
                prop.htmlFor name
                prop.text field.error
            ]
        ]
    ]