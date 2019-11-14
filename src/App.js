import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Talks from './Talks';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
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
