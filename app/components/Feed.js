import React, { Component, PropTypes } from 'react';
import FeedItem from './FeedItem';

const Feed = (props) => {
  let feedItems = props.data.map((item) => {
    return <FeedItem key={ item.id } actions={ props.actions} {...item} />
  });

  return(
    <section className='app__feed'>
      { feedItems }
    </section>
  );
}


Feed.propTypes = {
  data: PropTypes.array,
}


export default Feed;
