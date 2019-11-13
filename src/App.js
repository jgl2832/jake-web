import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Home from './Home.js';
import Talks from './Talks.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p className="Talks">
            <Link to="/">Home</Link> | <Link to="/talks">Talks</Link>
          </p>
          <h1 className="Name">
            Jake G Levine
          </h1>
          <Switch>
            <Route path="/talks">
              <Talks />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
