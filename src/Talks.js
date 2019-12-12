import React from 'react';
import ExternalLink from './components/ExternalLink';

const Video = ({ id, url }) =>
  <div className="videoWrapper">
    <iframe
      title={id}
      id={id}
      width="560" height="315"
      src={url}
      frameborder="0"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

const lazyEngLink = <ExternalLink link="https://events.codemotion.com/conferences/berlin/2019/speaker/6025/">
  Codemotion Berlin 2019
</ExternalLink>

const lazyEngBlogLink = <ExternalLink link="https://medium.com/@codemotion/codemotion-berlin-shows-the-future-of-programming-work-and-society-9b723a8a4baa#0f1e">
  Recap
</ExternalLink>

const bangBangLink = <ExternalLink link="http://bangbangcon.com/2016/speakers.html#jake-levine">
  !!con 2016
</ExternalLink>

export default function Talks() {
  return (
    <span className="Talks">
      <label for="codemotion">
        Lazy Engineering ({lazyEngLink} - {lazyEngBlogLink})
      </label>
      <br />
      <Video id="codemotion" url="https://www.youtube.com/embed/UXSSJENiZiw" />
      <br />
      <label for="bangbangcon">
        Sorting is as easy as 1,2,3 - but not as easy as a,b,c! ({bangBangLink})
      </label>
      <br />
      <Video id="bangbangcon" url="https://www.youtube.com/embed/kmLHuKs0M10" />
      <br />
      <label for="devpost">
        All about phone interviews (Devpost)
      </label>
      <br />
      <Video id="devpost" url="https://www.youtube.com/embed/JnJpmuhupuQ" />
    </span>
  );
}
