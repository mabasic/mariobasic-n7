module Main

open Fable.Core.JsInterop

importSideEffects "bootstrap/js/dist/dropdown.js"
importSideEffects "bootstrap/js/dist/collapse.js"
importSideEffects "../scss/index.scss"

// Types

type Field = { error: string; value: string }
type BooleanField = { error: string; value: bool }

type SelectOption = { value: string; text: string }