import '../styles/feed_item.scss';

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import constants from '../constants';
import ActorCard from './ActorCard';
import LocationDetailsTrigger from './LocationDetailsTrigger';
import LikeTrigger from './LikeTrigger';
import CommentTrigger from './CommentTrigger';
import MoreInteractionsTrigger from './MoreInteractionsTrigger';

const FeedItem = (props) => {
  const classes = classNames({
    'feed__item__wrap': true,
    [props.id]: true,
  });

  const locationInfo = {
    latitude: '',
    longitude: '',
    actor: props.user,
  }

  console.log('image_url: ', props.image_url);

  console.log('image placeholder: ',  );
  return(
    <article className='component__feed__item'>
      <figure className={ classes }>
        <section className='feed_media_object'>
          <img src={ constants.FEED_IMAGE_PLACEHOLDERS[Math.floor(Math.random() * 4)] } alt='' className='feed_img'/>
        </section>
        <figcaption>
          <section className='item__main'>
            <span className='item__metadata'>
              <span className='timestamp'>3m</span>
              &middot;
              <span className='nested location'>
                <LocationDetailsTrigger metadata={ locationInfo } />
              </span>
            </span>
            <div className='item__content'>
              { props.desription || "hello! welcome to tilte, the place where we share the most fun experiences!" }
            </div>
          </section>

          <section className='item__interactions'>
            <span className='nested user'>
              <ActorCard actor={ props.user } />
            </span>
            <span className='nested  like'>
              <LikeTrigger />
            </span>
            <span className='nested  comment'>
              <CommentTrigger />
            </span>
            <span className='nested  more'>
              <MoreInteractionsTrigger />
            </span>
          </section>
        </figcaption>
      </figure>
    </article>
  );
}

FeedItem.propTypes = {
}

export default FeedItem;
