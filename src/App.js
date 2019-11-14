import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
        <div className="Content">
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
        </div>
      </div>
    </Router>
  );
}

export default App;
