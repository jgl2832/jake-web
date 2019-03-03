import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Name">
            Jake G Levine
          </h1>
          <p className="Bio">
            Software Engineer from NYC | Living in Berlin
            <br/>
            Staff Software Engineer @ Meetup
          </p>
          <ul className="SocialLinks">
            <li>
              <a href="mailto:jgl@jgl.nyc" target="_blank">
                <FontAwesomeIcon className="Icon" icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/jgl2832" target="_blank">
                <FontAwesomeIcon className="Icon" icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/theDJ" target="_blank">
                <FontAwesomeIcon className="Icon" icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/profile/view?id=61732651" target="_blank">
                <FontAwesomeIcon className="Icon" icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/jgl2832" target="_blank">
                <FontAwesomeIcon className="Icon" icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/jgl2832/" target="_blank">
                <FontAwesomeIcon className="Icon" icon={faInstagram} />
              </a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
