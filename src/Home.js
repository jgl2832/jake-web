import React from 'react';

import SocialLinks from './components/SocialLinks.jsx';

export default function Home() {
  return (
    <React.Fragment>
      <p className="Bio">
        Software Engineer in Berlin | From NYC
      </p>
      <SocialLinks />
    </React.Fragment>
  );
}
