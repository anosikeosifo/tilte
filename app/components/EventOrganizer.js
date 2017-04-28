import '../styles/event_organizer';

import React, { PropTypes } from 'react';
import { ORGANIZER_AVATAR_PLACEHOLDER } from '../constants';
import Location from './Location';
import FollowAction from './FollowAction';

const EventOrganizer = (props) => {
  return(
    <section className='component__event__organizer'>
      <section className='section__header'>
        <span>Meet the Organizer</span>
      </section>
      <div className='organizer__details_wrap'>
        <div className='left__section'>
          <div className='organizer__avatar__wrap'>
            <img src={ ORGANIZER_AVATAR_PLACEHOLDER || props.organizer.avatarUrl }  className='avatar'/>
          </div>
        </div>
        <div className='right__section'>
          <section className='orgainizer__main__details'>
            <div className='left user__data'>
              <span className='username'>Anosike Osifo</span>
              <Location latitude='6.5616' longitude='3.3842'/>
            </div>

            <div className='right user__action'>
              <FollowAction isFollowing={ props.isFollowing || false } />
            </div>
          </section>

          <section className='organizer__meta__data'>
            <div className='metatdata__wrap'>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default EventOrganizer
