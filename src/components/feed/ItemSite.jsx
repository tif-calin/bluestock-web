import React from 'react';
import PropTypes from 'prop-types';

const ItemSite = ({ item, user, star }) => {

  const { thing: site } = item;

  const handleCheck = e => {
    e.preventDefault();
    if (user) star(item.id);
  };

  const style = {
    backgroundColor: `${site?.css_overview?.background_color}`,
    color: `${site?.css_overview?.text_color}`,
    fontFamily: site?.css_overview?.body_font 
      || site?.css_overview?.top_font
  };

  return <>
    <li 
      className="Item"
      title={JSON.stringify(item, null, 2)}
    >
      {Boolean(user) && <label className="anicon">
        <input 
          type="checkbox" 
          value={item.id}
          checked={item.stars.includes(user)}
          onChange={handleCheck}
        />
        <span>P</span>
      </label>}

      <span>{item.stars.length}</span>
      
      <div style={style}>
        <h4>
          <a href={site.site}>{site.name}</a>
          {site.open && <a href={site.open}>🌐</a>}
        </h4>
        <p>{site.desc}</p>
      </div>
    </li>
  </>;
};

ItemSite.propTypes = {
  item: PropTypes.object,
  user: PropTypes.string,
  star: PropTypes.func
};

export default ItemSite;
