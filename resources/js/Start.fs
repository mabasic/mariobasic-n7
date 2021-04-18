module Start

// Feliz

open Feliz
open Browser.Dom
open GetStarted

// [<ReactComponent(import="default", from="./components/GetStarted.js")>]
// let GetStarted () = React.imported()

ReactDOM.render(GetStarted(), document.getElementById "get-started")

// Fable-react

// open Fable.React
// open Browser.Dom

// let inline get_started () : ReactElement =
//     ofImport "default" "./components/GetStarted.js" () []

// ReactDom.render(get_started (), document.getElementById "get-started")