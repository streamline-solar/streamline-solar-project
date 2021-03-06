import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Project from "./components/TheProject";
import Progress from "./components/OurProgress";
import Partners from "./components/Partners";
import Photos from "./components/Photos";
import Contact from "./components/Contact";
import Support from "./components/Support";


class App extends Component {
  render() {
    return (
      <main className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/the-project" component={Project} />
        <Route exact path="/our-progress" component={Progress} />
        <Route exact path="/our-partners" component={Partners} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/support-us" component={Support} />
      </Switch>
    </main>
    );
  }
}

export default App;
