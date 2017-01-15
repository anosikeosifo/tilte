import '../styles/moment.scss';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { FEED_IMAGE_PLACEHOLDERS, USER_AVATAR_PLACEHOLDER } from '../constants';
import ActorCard from './ActorCard';
import LocationDetailsTrigger from './LocationDetailsTrigger';
import LikeTrigger from './LikeTrigger';
import CommentTrigger from './CommentTrigger';
import MoreInteractionsTrigger from './MoreInteractionsTrigger';

const Moment = (props) => {
  const classes = classNames({
    'feed__item__wrap': true,
    [props.id]: true,
  });

  const locationInfo = {
    latitude: '',
    longitude: '',
    actor: props.user,
  }

  console.log('props.is_favorite: ', props.is_favorite);

  return(
    <article className='component__feed__item'>
      <figure className={ classes }>
        <section className='feed_media_object'>
          <img src={ FEED_IMAGE_PLACEHOLDERS[Math.floor(Math.random() * 4)] } alt='' className='feed_img'/>
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
            }
            </div>
          </section>

          <section className='item__interactions'>
            <span className='nested user'>
              <span className='user__image__wrap'>
                <img className='image' src={ props.user.avatarUrl || USER_AVATAR_PLACEHOLDER }/>
              </span>
            </span>
            <span className='nested like'>
              <LikeTrigger momentId={ props.id } isEnabled={ !props.is_favorite } uiState={ props.is_favorite ? "active" : "default" } likeAction={ props.actions.like }/>
            </span>
            <span className='nested comment'>
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

Moment.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default Moment;
