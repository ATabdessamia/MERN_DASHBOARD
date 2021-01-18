import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import history from "./history";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
