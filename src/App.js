import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Views from "Views";
import "react-toastify/dist/ReactToastify.css";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <p>App.js</p>
      <Router>
        <Switch>
          <Route path="/" component={Views} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
