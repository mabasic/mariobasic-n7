import { render } from "react-dom";
import { createElement } from "react";
import { GetStarted } from "./components/GetStarted.fs.js";

render(createElement(GetStarted, null), document.getElementById("get-started"));

