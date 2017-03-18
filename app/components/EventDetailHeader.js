require('../styles/event_detail_header');

import React, { Component, PropTypes } from 'react';
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
