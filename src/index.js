import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <HashRouter basename="/video-show">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
