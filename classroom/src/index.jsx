import React from "react";
import ReactDOM from "react-dom/client";
import Timer from "./components/ExempleOne";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Timer start={0} ms={1000}></Timer>
  </>
)
