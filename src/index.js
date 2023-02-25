import React from "react";
import ReactDOM from "react-dom";
// import * as pi from "./math.js";
import { add, multiply, subtract, divide, mod } from "./calculator";

// import pi,{doublePi,tripplePi} from "./math.js";

ReactDOM.render(
  <ul>
    <li>{add(2, 3)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(2, 3)}</li>
    <li>{divide(2, 3)}</li>
    <li>{mod(2, 3)}</li>
  </ul>,
  document.getElementById("root")
);
