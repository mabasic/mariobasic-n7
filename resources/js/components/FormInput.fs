module FormInput

open Feliz
open Main

[<ReactComponent>]
let FormInput(name: string,
              placeholder: string, 
              inputType: string, 
              field: Field, 
              onChange: Browser.Types.Event -> unit) : ReactElement =
    Html.div [
        prop.className "mb-3"
        prop.children [
            Html.label [
                prop.htmlFor name
                prop.text placeholder
            ] 
            Html.input [
                prop.className 
                    (if String.length field.error > 0 then "form-control is-invalid" else "form-control") 
                prop.name name
                prop.type' inputType
                prop.id name
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