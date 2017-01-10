import React, { Component, PropTypes } from 'react';
import FeedItem from './Moment';
import Masonry from 'react-masonry-component';

let masonryOptions = {
  transitionDuration: 0,
};

const Feed = (props) => { 
  let feedItems = props.data.map((item) => {
    return <FeedItem key={ item.id } actions={ props.actions} {...item} />
  });

  return(
    <section className='feed__section'>
      <Masonry
        className={ 'masonry__wrap' }
        elementType='div'
        options={ masonryOptions } >
        { feedItems }
      </Masonry>
    </section>
  );
}


Feed.propTypes = {
  data: PropTypes.array,
}


export default Feed;
