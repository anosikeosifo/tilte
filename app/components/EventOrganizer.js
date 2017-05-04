import '../styles/event_organizer';

import React, { PropTypes } from 'react';
import { ORGANIZER_AVATAR_PLACEHOLDER } from '../constants';
import Location from './Location';
import FollowAction from './FollowAction';
import UserStats from './UserStats';

const EventOrganizer = (props) => {
  return(
    <section className='component__event__organizer'>
      <section className='section__header'>
        <span>Meet the Organizer</span>
      </section>
      <div className='organizer__details_wrap'>
        <div className='left__section'>
          <div className='organizer__avatar__wrap'>
            <img src={ ORGANIZER_AVATAR_PLACEHOLDER || props.event.organizer.avatarUrl }  className='avatar'/>
          </div>
        </div>
        <div className='right__section'>
          <section className='orgainizer__main__details'>
            <div className='left user__data'>
              <span className='username'>{ `${ props.event.organizer.lastname } ${ props.event.organizer.firstname }` }</span>
              <Location latitude='6.5616' longitude='3.3842'/>
            </div>

            <div className='right user__action'>
              <FollowAction isFollowing={ !props.event.organizer.canBeFollowed } user={ props.event.organizer } actionCallback={ props.actionCallbacks.followAction } />
            </div>
          </section>

          <section className='organizer__meta__data'>
            <UserStats organizer={ props.event.organizer } actionCallbacks={ props.actionCallbacks } stats={ props.stats } />
          </section>
        </div>
      </div>
    </section>
  );
}

EventOrganizer.propTypes = {

};

export default EventOrganizer
