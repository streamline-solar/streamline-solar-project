import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Project from "./components/TheProject";


class App extends Component {
  render() {
    return (
      <main className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/the-project" component={Project} />
      </Switch>
    </main>
    );
  }
}

export default App;
