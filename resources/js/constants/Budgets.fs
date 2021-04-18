namespace Constants

module Budgets =

  open Main

  let Budgets = 
    [| { value = "<1000$"; text = "Less than 1000$" }
       { value = "1000$-10000$"; text = "1000$-10000$" }
       { value = "10000$+"; text = "10000$+" } |]