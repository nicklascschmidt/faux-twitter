import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../pages/Home/Home';
import UserProfile from '../pages/UserProfile/UserProfile';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/user/:userHandle">
          <UserProfile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}