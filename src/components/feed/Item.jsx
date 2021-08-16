import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => {

  return <>
    <li 
      className="Item"
      title={JSON.stringify(item, null, 2)}
    >
      <div style={{ background: item.journal_gradient }}></div>
      <span>{item.title}</span>
    </li>
  </>;
};

Item.propTypes = {
  item: PropTypes.object
};

export default Item;
