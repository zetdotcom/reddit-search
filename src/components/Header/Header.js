import React from 'react';
import redditImage from '../../images/reddit.png';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src={redditImage} alt='' />
      </div>
      <div className="header-title">Reddit reddits search</div>
    </div>
  );
};

export default Header;
