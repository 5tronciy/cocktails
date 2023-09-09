import React from "react";
import { createRoot } from "react-dom/client";

document.body.innerHTML = '<div id="root"></div>';

const root = createRoot(document.getElementById("root"));
root.render(<h1>Hello, world!!!</h1>);