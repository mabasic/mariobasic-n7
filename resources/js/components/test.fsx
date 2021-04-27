type ErrorField = string array

type ErrorFields = {
    first_name: ErrorField option
}

// let test: ErrorField = [| "ajme" |]

let errorFields = {
    first_name = Some([| "ajme2" |])
}

match errorFields.first_name with
| Some(first_name) -> first_name.[0]
| None -> "none"