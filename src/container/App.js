import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import DasboardRoutes from "./DashboardRoutes";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <DasboardRoutes path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
