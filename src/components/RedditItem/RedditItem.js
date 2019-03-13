import React from 'react';
import redditAvatar from '../../images/reddit-avatar.png';

import './RedditItem.scss';

const RedditItem = ({ item }) => {
  const { thumbnail, permalink, author, title, link_flair_text } = item;

  const avatar = thumbnail.includes('http') ? thumbnail : redditAvatar;
  return (
    <div className="reddit">
      <div className="reddit__left-side">
        <div className="reddit__image">
          <img src={avatar} alt="" />
        </div>
        <div className="reddit__author">author: {author}</div>
        <div className="reddit_url" />
      </div>
      <div className="reddit__right-side">
        <div className="reddit__title">{title}</div>
        <div className="right-side__bottom">
          <div className="bottom__link">
            <a href={`https://www.reddit.com/${permalink}`} target="blank">
              See reddit
            </a>
          </div>
          {link_flair_text && <div className="bottom__flair-text">{link_flair_text}</div>}
        </div>
      </div>
    </div>
  );
};

export default RedditItem;
