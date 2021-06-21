import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MainProvider } from "./provider/MainProvider";

ReactDOM.render(
  <MainProvider>
    <App />
  </MainProvider>,
  document.getElementById("root")
);

reportWebVitals();
