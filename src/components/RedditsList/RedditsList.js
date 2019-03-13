import React from 'react';
import RedditItem from '../RedditItem/RedditItem';

import './RedditsList.scss';

const RedditsList = ({ data }) => {
  return (
    <div className="reddits-list">
      <ul>{data.map(item => <RedditItem item={item} />)}</ul>
    </div>
  );
};

export default RedditsList;
