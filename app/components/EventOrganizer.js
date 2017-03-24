import '../styles/event_organizer';

import React, { PropTypes } from 'react';
import { ORGANIZER_AVATAR_PLACEHOLDER } from '../constants';

const EventOrganizer = (props) => {
  return(
    <section className='component__event__organizer'>
      <section className='section__header'>
        <span>Meet the Organizer</span>
      </section>
      <div className='organizer__details_wrap'>
        <div className='left_section'>
          <div className='organizer__avatar__wrap'>
            <img src={ ORGANIZER_AVATAR_PLACEHOLDER || props.organizer.avatarUrl }  className='avatar'/>
          </div>
        </div>
        <div className='right_section'>

        </div>
      </div>
    </section>
  );
}

export default EventOrganizer
