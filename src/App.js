import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Views from "Views";
import "react-toastify/dist/ReactToastify.css";
import logo from "./logo.svg";
import "./App.css";

import configureStore from 'Store/configureStore';

let store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <p>App.js</p>
      <Router>
        <Switch>
          <Route path="/" component={Views} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
