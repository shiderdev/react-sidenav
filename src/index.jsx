import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import publicPath from "./utils/public-path";

document.body.innerHTML = '<div id="app"></div>';

const rootNode = document.getElementById("app");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={publicPath}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootNode
);
