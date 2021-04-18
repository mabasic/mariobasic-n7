type SelectOption = {value: string; text: string}

let options = [
    {value = "one"; text = "one"};
    {value = "two"; text = "two"};
]

List.map (fun x -> [
                    x.value;
                    x.text;
                ]) options