import React from "react";
import ReactDOM from "react-dom/client";
import Timer from "./components/ExempleOne";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Timer start={0} ms={1000}></Timer>
    <Timer start={100} ms={500}></Timer>
  </>
)