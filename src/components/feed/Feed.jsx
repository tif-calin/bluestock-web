/* eslint-disable max-len */
import React from 'react';
import { useData } from '../../state/state.js';
import ItemSite from './ItemSite';
import Login from './Login';
import '../../styles/feed.scss';

const Feed = () => {

  const { loading, data, user, login, signup, star } = useData();

  return <>
    <div className="Feed">
      <h1>bluestock</h1>

      <hr/>

      <Login user={user} login={login} signup={signup}/>

      <hr/>

      <span>{data.length} things found</span>
      
      <hr/>

      {loading 
        ? <span>loading...</span>
        : <ul>
          {data.map(thing => (
            <ItemSite key={thing.id} item={thing} star={star} user={user}/>
          ))}
        </ul>
      }
    </div>
  </>;
};

export default Feed;
