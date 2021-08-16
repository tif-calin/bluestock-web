/* eslint-disable max-len */
import React from 'react';

const About = () => {
  return <>
    <div className="About">
      <details>
        <summary>what is bluestock?</summary>
        
        <p>
          bluestock takes any list of things and a schema outlining the properties of those things and gives you powerful functionality to:
        </p>

        <p>
          <ol>
            <li> • allow users to save those items to custom collections</li>
            <li> • give users the power to comment on those things</li>
            <li> • allows the things to be voted on and tagged</li>
            <li> • allow users to filter and sort through the things by any property</li>
          </ol>
        </p>

        <p>
          bluestock then uses this crowd-sourced data to empower other users to filter and sort through the feed by any property, tag, or similarity (based on user-defined collections)
        </p>

        <p>
          the eventual goal is to utilize this technology to apply the power of crowd-sourced data parsing to overcome institutional barriers keeping people from interacting and engaging with academic works
        </p>
      </details>
    </div>
  </>;
};

export default About;
