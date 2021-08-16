/* eslint-disable max-len */
import React from 'react';
import { useData } from '../../state/state';
import Item from './Item';
import '../../styles/feed.scss';

const Feed = () => {

  const { data } = useData();

  return <>
    <div className="Feed">
      <h1>bluestock</h1>
      {/* <p>bluestock aims to utilize the power of the crowd to overcome insitutional barriers keeping people from</p> */}
      <details>
        <summary>what is bluestock?</summary>
        <p>
          bluestock takes any list of things and a schema outlining the properties of those things and gives you powerful functionality to:
        </p>

        <p>
          <ol>
            <li> • allow users to save those items to custom lists</li>
            <li> • give users the power to comment on those things</li>
            <li> • allows the things to be voted on and tagged</li>
            <li> • allow users to filter and sort through the things by any property</li>
          </ol>
        </p>

        <p>
          bluestock then uses this crowd-sourced data to empower other users to filter and sort through the feed by any property, tag, or similarity (based on user-defined collections)
        </p>
      </details>

      <hr/>
      <span>{data.length} articles found</span>
      <hr/>

      <ul>
        {data.map(doi => <>
          <Item key={doi.doi} item={doi}/>
        </>)}
      </ul>
    </div>
  </>;
};

export default Feed;
