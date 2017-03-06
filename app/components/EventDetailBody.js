require('../styles/event_detail');

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { fetchEventDetails } from '../actions/EventActionCreators';
import { FEED_IMAGE_PLACEHOLDERS, USER_AVATAR_PLACEHOLDER } from '../constants';
import ActorCard from './ActorCard';
import LocationDetailsTrigger from './LocationDetailsTrigger';
import LikeTrigger from './LikeTrigger';
import CommentTrigger from './CommentTrigger';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

const EventDetailBody = (props) => {
  return (
    <section className='component__event__detail__body'>
      <div className='event__detail__wrap'>
        <figure className='event_details'>
          <section className='event_media_object'>
          </section>

          <figcaption>
            <section className='item__main'>
              <span className='item__metadata'>
                <span className='timestamp'>3m</span>
                &middot;
                <span className='nested location'>
                  <LocationDetailsTrigger/>
                </span>
              </span>
              <div className='item__content'>
                { props.eventObject.description || "hello! welcome to tilte, the place where we share the most fun experiences!" }
              </div>
            </section>
             <section className='comment__section'>
              <div className='comment__input'>
                <CommentInput eventId={ props.eventObject.id } actor={ props.eventObject.user } commentCount={ props.eventObject.comments_count } submitAction={ props.actionCallbacks.makeComment }/>
              </div>
              <div className='comment__list'>
                <CommentList comments={ props.eventObject.comments }/>
              </div>
            </section>
          </figcaption>
        </figure>
      </div>

      <div className='map__view'>
      </div>
    </section>
  );
}

EventDetailBody.propTypes = {
  event: PropTypes.shape({
    can_repost: PropTypes.bool,
    can_comment: PropTypes.bool,
    is_favorite: PropTypes.bool,
    comments: PropTypes.array,
    // comments_count: PropTypes.number.isRequired,
    // favorites_count: PropTypes.number.isRequired,
    // reposts_count: PropTypes.number.isRequired,
    description: PropTypes.string,
    image_url: PropTypes.string,
    origin_post: PropTypes.object,
    created_at: PropTypes.string,
    comments: PropTypes.array,
  }),
  actor: PropTypes.object,
}

export default EventDetailBody;
