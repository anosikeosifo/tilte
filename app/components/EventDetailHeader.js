require('../styles/event_detail_header');

import React, { Component, PropTypes } from 'react';
import EventDateFormatter from './EventDateFormatter';
import LocationMarker from './LocationMarker';
import EventActions from './EventActions';
import { FEED_IMAGE_PLACEHOLDERS, USER_AVATAR_PLACEHOLDER } from '../constants';

const EventDetailHeader = (props) => {
  const headerStyle = {
    backgroundImage: `url(${ FEED_IMAGE_PLACEHOLDERS[3] })`,
    backgroundPosition: '20% 30%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  return(
    <section className='component__eventdetail__header'
      style={headerStyle} >
      <div className='container__wrap'>
        <section className='event__information__wrap'>
          <span className='event__name'>{ props.eventObject.name }</span>
          <div className='location__info'>
            <span className='event__location'>{ "Oniru Beach, Lagos State, Nigeria" || props.eventObject.location.name }</span>
            <LocationMarker latitude={ "6.4367" || props.eventObject.location.latitude} longitude={ "3.4192" || props.eventObject.location.longitude } action={ props.showMapAction }/>
          </div>
          <div className='event__date__wrap'>

          </div>
        </section>
        <section className='event__action__wrap'>
          <EventActions eventId={ props.eventObject.id } actionsSet={ props.userActions } actor={ props.actor }/>
        </section>
      </div>
    </section>
  );
}

EventDetailHeader.propTypes = {
  eventObject: PropTypes.object.isRequired,
  actor: PropTypes.object,
  userActions: PropTypes.array.isRequired,
}

export default EventDetailHeader;
