/* eslint-disable max-len */
import React from 'react';
import { useData } from '../../state/state';
import Item from './Item';
import About from './About';
import '../../styles/feed.scss';

const Feed = () => {

  const { data } = useData();

  return <>
    <div className="Feed">
      <h1>bluestock</h1>
      {/* <p>bluestock aims to utilize the power of the crowd to overcome insitutional barriers keeping people from</p> */}
      <About/>

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
