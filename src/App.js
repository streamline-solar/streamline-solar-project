import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Project from "./components/TheProject";
import Progress from "./components/OurProgress";
import Partners from "./components/Partners";


class App extends Component {
  render() {
    return (
      <main className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/the-project" component={Project} />
        <Route exact path="/our-progress" component={Progress} />
        <Route exact path="/our-partners" component={Partners} />
      </Switch>
    </main>
    );
  }
}

export default App;
