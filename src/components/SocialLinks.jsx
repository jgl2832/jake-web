import React from 'react';
import { faFacebookF, faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ExternalLink from './ExternalLink';

const SocialLink = ({ link, icon }) =>
  <ExternalLink link={link}>
    <FontAwesomeIcon className="Icon" icon={icon} />
  </ExternalLink>

const linkList = [
  SocialLink({ link: "mailto:jgl@jgl.nyc", icon: faEnvelope }),
  SocialLink({ link: "https://instagram.com/jgl2832/", icon: faInstagram }),
  SocialLink({ link: "https://www.facebook.com/jgl2832", icon: faFacebookF }),
  SocialLink({ link: "https://github.com/jgl2832", icon: faGithub }),
  SocialLink({ link: "https://www.linkedin.com/profile/view?id=61732651", icon: faLinkedin }),
  SocialLink({ link: "https://twitter.com/theDJ", icon: faTwitter }),
];

export default function SocialLinks() {
  return (
    <ul className="SocialLinks">
    {linkList.map((link, index) =>
      <li key={index}>{link}</li>
    )}
    </ul>
  );
}
