import React from "react";
import { render } from "react-dom";
import App from "./Components/App";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./ConfigureStore";
import {Provider} from "react-redux";

let store = configureStore();

render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById("root")
);
