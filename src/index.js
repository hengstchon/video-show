import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import ReactGA from "react-ga";

import App from "./components/App";

ReactGA.initialize("UA-175296999-2");

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
