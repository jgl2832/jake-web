import React from 'react';

function Video({ id, url }) {
  return (
    <div className="videoWrapper">
      <iframe title={id} id={id} width="560" height="315" src={url} frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
};

export default function Talks() {
  return (
    <span className="Talks">
      <label for="codemotion">
        Lazy Engineering (<a href="https://events.codemotion.com/conferences/berlin/2019/speaker/6025/" target="_blank" rel="noopener noreferrer">Codemotion Berlin 2019</a>)
      </label>
      <div id="codemotion">Coming soon!</div>
      <br />
      <label for="bangbangcon">
        Sorting is as easy as 1,2,3 - but not as easy as a,b,c! (<a href="http://bangbangcon.com/2016/speakers.html#jake-levine" target="_blank" rel="noopener noreferrer">!!con 2016</a>)
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
