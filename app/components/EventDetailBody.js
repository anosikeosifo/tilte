require('../styles/event_detail_body');

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
        <section className='event_media_object'>
        </section>
        <section className='event_detail__sidebar'>
        </section>
        <section className='event__details__main'>
          <div className='event__info'>
            { props.eventObject.description || "hello! welcome to tilte, the place where we share the most fun experiences!" }
          </div>
          <div className='creator__info'>

          </div>
          <section className='comment__section'>
           <div className='comment__input'>
             { /* <CommentInput eventId={ props.eventObject.id } actor={ props.eventObject.user } commentCount={ props.eventObject.comments_count } submitAction={ props.actionCallbacks.makeComment }/> */}
           </div>
           <div className='comment__list'>
             { /*<CommentList comments={ props.eventObject.comments }/> */}
           </div>
          </section>
        </section>
        <div className='map__section'>
        </div>
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
