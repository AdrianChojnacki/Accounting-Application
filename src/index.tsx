import React from "react";
import "./i18n";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./variables.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
