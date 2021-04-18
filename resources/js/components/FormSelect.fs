module FormSelect

open Feliz
open Main

let selectPlaceholder = Html.option [
    prop.value ""
    prop.key ""
    prop.text "Open this select menu"
]

[<ReactComponent>]
let FormSelect(name: string,
               placeholder: string, 
               options: SelectOption array, 
               field: Field, 
               onChange: Browser.Types.Event -> unit) : ReactElement =
    Html.div [
        prop.className "mb-3"
        prop.children [
            Html.label [
                prop.htmlFor name
                prop.text placeholder
            ] 
            Html.select [
                prop.className 
                    (if String.length field.error > 0 
                     then "form-control is-invalid" 
                     else "form-control") 
                prop.name name
                prop.id name
                prop.value field.value
                prop.onChange onChange
                prop.ariaLabel placeholder
                prop.children (Array.append 
                    [|selectPlaceholder|] 
                    (Array.map (fun x -> 
                        Html.option [
                            prop.value x.value
                            prop.key x.value
                            prop.text x.text
                        ]) options))
            ]
            if String.length field.error > 0 then Html.label [
                prop.className "invalid-feedback"
                prop.htmlFor name
                prop.text field.error
            ]
        ]
    ]