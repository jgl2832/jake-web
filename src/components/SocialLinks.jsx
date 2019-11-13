import React from 'react';
import { faFacebookF, faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const linkList = [
  {
    link: "mailto:jgl@jgl.nyc",
    icon: faEnvelope,
  },
  {
    link: "https://instagram.com/jgl2832/",
    icon: faInstagram,
  },
  {
    link: "https://www.facebook.com/jgl2832",
    icon: faFacebookF,
  },
  {
    link: "https://github.com/jgl2832",
    icon: faGithub,
  },
  {
    link: "https://www.linkedin.com/profile/view?id=61732651",
    icon: faLinkedin,
  },
  {
    link: "https://twitter.com/theDJ",
    icon: faTwitter,
  },
];

function SocialLink({ link, icon }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className="Icon" icon={icon} />
    </a>
  );
}

export default function SocialLinks() {
  return (
    <ul className="SocialLinks">
    {linkList.map((link) =>
      <li>
        <SocialLink {...link} />
      </li>
    )}
    </ul>
  );
}
