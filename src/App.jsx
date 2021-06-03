import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Screens
import Home from "./screens/Home";
import Login from "./screens/Login";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app h-100">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
