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
import EventDateFormatter from './EventDateFormatter';
import Location from './Location';
import EventActions from './EventActions';
import EventDescription from './EventDescription';
import EventOrganizer from './EventOrganizer';
import Attendance from './Attendance';
import { getEventShortDate } from '../helpers/DateHelper';

const EventDetailBody = (props) => {
  return (
    <section className='component__event__detail__body'>
      <div className='event__detail__wrap'>
        <section className='event_media_object'>
        </section>
        <section className='event_detail__sidebar'>
        </section>
        <section className='event__details__main'>
          <div className='details__header__wrap'>
            <div className='details__header'>
              <section className='event__information__wrap'>
                <div className='event__date__wrap'>
                  <span className='date__value'>{ getEventShortDate(props.eventObject.startTime, props.eventObject.endTime) }</span>
                </div>
                <span className='event__name'>{ props.eventObject.title }</span>
                <div className='location__info'>
                  <Location latitude={ "6.4367" || props.eventObject.location.latitude} longitude={ "3.4192" || props.eventObject.location.longitude } action={ props.showMapAction } size={ 16 }/>
                </div>
              </section>
              <section className='event__action__wrap'>
                <EventActions eventId={ props.eventObject.id } isAttending={ props.eventObject.isAttending } actionsSet={ props.userActions } actor={ props.actor }/>
              </section>
            </div>
            <div className='details__header_nav'>
              <ul className='nav__list'>
                <li className='item active'><button className='trigger' data-tab-header='description'><span>Description</span></button></li>
                <li className='item'><button className='trigger' data-tab-header='organizer'><span>Organizer</span></button></li>
                <li className='item'><button className='trigger' data-tab-header='whosgoing'><span>{ "Who's going" }</span></button></li>
              </ul>
            </div>
          </div>
          <section className='details__body'>
            <div className='section__wrap'>
              <EventDescription eventObject={ props.eventObject }/>
            </div>

            <div className='section__wrap'>
              <EventOrganizer event={ props.eventObject } stats={ props.organizerStats } actionCallbacks={{ fetchStats: props.actionCallbacks.fetchOrganizerStats, followAction: props.actionCallbacks.followOrganizer }}  />
            </div>

            <section className='attendees__section'>
              <div className='attendees__list'>
                <Attendance comments={ props.eventObject.comments }/>
              </div>
            </section>
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
