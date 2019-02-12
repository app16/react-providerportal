import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Dashboard from "./pages/Dashboard";
import PatientLayout from "./pages/PatientLayout";
import Permissions from "./pages/Response";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register"
import ProviderLayout from "./pages/ProviderLayout";
import ProviderDashboard from "./pages/ProviderDashboard";
import ProviderPermissions from "./pages/ProviderPermisions"


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={ProviderLayout}>
        <IndexRoute component={ProviderDashboard}></IndexRoute>
        <Route path="dashboard2" name="dashboard2" component={ProviderDashboard}></Route>
        <Route path="permissions2" name="permissions2" component={ProviderPermissions}></Route>
    </Route>
  </Router>,
app);
