import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import LogIn from "./component/logIn/LogIn.jsx";
import history from "./History.js"; 

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/logIn" component={LogIn} />
          </Route>
          <Route exact path="/logIn" component={LogIn} />
        </Switch>
      </Router>
    );
  }
}
