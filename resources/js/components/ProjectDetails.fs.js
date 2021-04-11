import { createElement } from "react";
import { Interop_reactApi } from "../.fable/Feliz.1.40.0/Interop.fs.js";
import { ofArray } from "../.fable/fable-library.3.1.1/List.js";
import { FormSelect } from "./FormSelect.fs.js";
import topics from "../constants/topics.js";
import budgets from "../constants/budgets.js";
import { FormInput } from "./FormInput.fs.js";
import { FormTextarea } from "./FormTextarea.fs.js";

export function ProjectDetails(projectDetailsInputProps) {
    let children;
    const q9 = projectDetailsInputProps.q9;
    const q8 = projectDetailsInputProps.q8;
    const q7 = projectDetailsInputProps.q7;
    const q6 = projectDetailsInputProps.q6;
    const q5 = projectDetailsInputProps.q5;
    const q4 = projectDetailsInputProps.q4;
    const q3 = projectDetailsInputProps.q3;
    const q2 = projectDetailsInputProps.q2;
    const q1 = projectDetailsInputProps.q1;
    const subject = projectDetailsInputProps.subject;
    const budget = projectDetailsInputProps.budget;
    const topic = projectDetailsInputProps.topic;
    const onInputChange = projectDetailsInputProps.onInputChange;
    const children_2 = ofArray([createElement("h2", {
        className: "mt-5 mb-3",
        children: "Project Details",
    }), createElement("div", {
        className: "border-cont",
        children: Interop_reactApi.Children.toArray([createElement("div", {
            className: "row pt-2",
            children: Interop_reactApi.Children.toArray([createElement("div", {
                className: "col-md-12 mb-3",
                children: Interop_reactApi.Children.toArray([(children = ofArray(["Fields marked with ", createElement("b", {
                    children: ["*"],
                }), " are required."]), createElement("p", {
                    children: Interop_reactApi.Children.toArray(Array.from(children)),
                }))]),
            }), createElement("div", {
                className: "col-md-6",
                children: Interop_reactApi.Children.toArray([createElement(FormSelect, {
                    name: "topic",
                    placeholder: "Select a topic*",
                    options: topics,
                    field: topic,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-6",
                children: Interop_reactApi.Children.toArray([createElement(FormSelect, {
                    name: "budget",
                    placeholder: "Select a budget*",
                    options: budgets,
                    field: budget,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormInput, {
                    name: "subject",
                    placeholder: "Subject*",
                    inputType: "text",
                    field: subject,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-21 mb-3 mt-5",
                children: Interop_reactApi.Children.toArray([createElement("h3", {
                    children: ["Questions"],
                }), createElement("p", {
                    children: ["All questions are optional, but I highly encourage you to answer them. They give me insights into your project so that I can provide you with the best solution."],
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormTextarea, {
                    name: "q1",
                    placeholder: "1. Describe your business in a few sentences",
                    height: 200,
                    field: q1,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormTextarea, {
                    name: "q2",
                    placeholder: "2. Do you currently have a website? If so, what is/isn’t working for you?",
                    height: void 0,
                    field: q2,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormTextarea, {
                    name: "q3",
                    placeholder: "3. What are your goals for this project?",
                    height: void 0,
                    field: q3,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormTextarea, {
                    name: "q4",
                    placeholder: "4. Who is your target audience?",
                    height: void 0,
                    field: q4,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormTextarea, {
                    name: "q5",
                    placeholder: "5. What specific features do you want on the site?",
                    height: 200,
                    field: q5,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormTextarea, {
                    name: "q6",
                    placeholder: "6. How can I avoid failure?",
                    height: void 0,
                    field: q6,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormTextarea, {
                    name: "q7",
                    placeholder: "7. Who are your main competitors?",
                    height: void 0,
                    field: q7,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormTextarea, {
                    name: "q8",
                    placeholder: "8. What makes you different from your competitors?",
                    height: void 0,
                    field: q8,
                    onChange: onInputChange,
                })]),
            }), createElement("div", {
                className: "col-md-12",
                children: Interop_reactApi.Children.toArray([createElement(FormTextarea, {
                    name: "q9",
                    placeholder: "9. What’s the scope of the project?",
                    height: 200,
                    field: q9,
                    onChange: onInputChange,
                })]),
            })]),
        })]),
    })]);
    return createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children_2)),
    });
}

