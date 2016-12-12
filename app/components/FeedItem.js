import '../styles/feed_item.scss';

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const FeedItem = (props) => {
  const classes = classNames({
    'feed_item': true,
    [props.id]: true,
  });

  return(
    <article className='component__feed__item'>
      <div className={ classes }>
        { props.description }
      </div>
    </article>
  );
}

FeedItem.propTypes = {
}

export default FeedItem;
