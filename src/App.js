import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="Name">
              Jake G Levine
            </h1>
            <Switch>
              <Route path="/talks">
                <div>sup</div>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <p className="Talks">
              <Link to="/">Home</Link> | <Link to="/talks">Talks</Link>
            </p>
          </header>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <span className="Home">
      <p className="Bio">
        Software Engineer in Berlin | From NYC
      </p>
      <ul className="SocialLinks">
        <li>
          <a href="mailto:jgl@jgl.nyc" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="Icon" icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/jgl2832/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="Icon" icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/jgl2832" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="Icon" icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a href="https://github.com/jgl2832" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="Icon" icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/profile/view?id=61732651" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="Icon" icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/theDJ" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="Icon" icon={faTwitter} />
          </a>
        </li>
      </ul>
    </span>
  );
}

export default App;
