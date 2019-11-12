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
}

function Talks() {
  return (
    <span class="Talks">
      <label for="codemotion">
        Lazy Engineering (<a href="https://events.codemotion.com/conferences/berlin/2019/speaker/6025/" target="_blank" rel="noopener noreferrer">Codemotion Berlin 2019</a>)
      </label>
      <div id="codemotion">Coming soon!</div>
      <br />
      <label for="bangbangcon">
        Sorting is as easy as 1,2,3 - but not as easy as a,b,c! (<a href="http://bangbangcon.com/2016/speakers.html#jake-levine" target="_blank" rel="noopener noreferrer">!!con 2016</a>)
      </label>
      <br />
      <div class="videoWrapper">
        <iframe title="bangbangcon" id="bangbangcon" width="560" height="315" src="https://www.youtube.com/embed/kmLHuKs0M10" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br />
      <label for="devpost">
        All about phone interviews (Devpost)
      </label>
      <br />
      <div class="videoWrapper">
        <iframe title="devpost" id="devpost" width="560" height="315" src="https://www.youtube.com/embed/JnJpmuhupuQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </span>
  );
}

function Home() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
