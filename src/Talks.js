import React from 'react';

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

export default Talks;
