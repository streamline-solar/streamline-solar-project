import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";


class App extends Component {
  render() {
    return (
      <main className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
    );
  }
}

export default App;
