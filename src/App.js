import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Views from "Views";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "animate.css/animate.min.css";
import { ToastContainer } from "react-toastify";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'; 
import configureStore from "Store/configureStore";

library.add(fas, fab);

let store = configureStore();

function App() {
  return (
    <Provider store={store}>
       <ToastContainer />
      <Router>
        <Switch>
          <Route path="/" component={Views} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
