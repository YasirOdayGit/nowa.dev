import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./foundation/Utility/Utility.scss";
import "./foundation/Utility/AnimationUtility.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
