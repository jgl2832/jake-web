import React from 'react';

export default function ExternalLink({ link, children }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">{children}</a>
  );
}
