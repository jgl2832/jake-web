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
        <p className="Links">
          <Link to="/">Home</Link> | <Link to="/talks">Talks</Link>
        </p>
        <header className="Content">
          <h1 className="Name">
            Jake G Levine
          </h1>
          <Home />
          <Switch>
            <Route path="/talks">
              <hr className="line" />
              <Talks />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
