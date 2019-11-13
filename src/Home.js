import React from 'react';

import { faFacebookF, faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

export default Home;
