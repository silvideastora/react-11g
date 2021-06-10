import React from 'react';

import AppLoading from './components/AppLoading';
import Header from './components/Header';
import SideNavLeft from './components/SideNavLeft';
import SideNavRight from './components/SideNavRight';
import Posts from './components/Posts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./screens/Home";
import Challenge from "./screens/Challenge";

import Exercises from './screens/Exercises'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route  path = "/challenge">
            <Challenge />
          </Route>
          <Route exact path = "/Exercises">
            <Exercises />
          </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
