import React from "react";
import ReactDOM from "react-dom";
import AuthProvider from "context/AuthProvider";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <AuthProvider>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/admin" />
      </Switch>
    </Router>
  </AuthProvider>,
  document.getElementById("root")
);
