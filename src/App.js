import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Views from "Views";
import "react-toastify/dist/ReactToastify.css";
import logo from "./logo.svg";
import "./App.css";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'; 
import configureStore from "Store/configureStore";

library.add(fas, fab);

let store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Views} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
