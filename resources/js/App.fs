module App

// Feliz

open Feliz
open Browser.Dom

[<ReactComponent(import="default", from="./components/GetStarted.js")>]
let GetStarted () = React.imported()

ReactDOM.render(GetStarted, document.getElementById "get-started")

// Fable-react

// open Fable.React
// open Browser.Dom

// let inline get_started () : ReactElement =
//     ofImport "default" "./components/GetStarted.js" () []

// ReactDom.render(get_started (), document.getElementById "get-started")

// Types

type Field = { error: string; value: string }
type BooleanField = { error: string; value: bool }

type SelectOption = { value: string; text: string }