import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item, user, star }) => {

  const { thing } = item;

  const handleCheck = e => {
    e.preventDefault();
    if (user) star(item.id);
  };

  return <>
    <li 
      className="Item"
      title={JSON.stringify(item, null, 2)}
    >
      {Boolean(user) && <label className="anicon">
        <input 
          type="checkbox" 
          value={Item.id}
          checked={item.stars.includes(user)}
          onChange={handleCheck}
        />
        <span>P</span>
      </label>}

      <span>{item.stars.length}</span>
      
      <span><a href={thing.site}>{thing.name}</a></span>
    </li>
  </>;
};

Item.propTypes = {
  item: PropTypes.object,
  user: PropTypes.string,
  star: PropTypes.func
};

export default Item;
