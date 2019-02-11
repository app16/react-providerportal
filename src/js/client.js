import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Dashboard from "./pages/Dashboard";
import PatientLayout from "./pages/PatientLayout";
import Permissions from "./pages/Response";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register"


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={PatientLayout}>
      <IndexRoute component={Dashboard}></IndexRoute>
      <Route path="dashboard" name="dashboard" component={Dashboard}></Route>
      <Route path="permissions" name="permissions" component={Permissions}></Route>
    </Route>
  </Router>,
app);
