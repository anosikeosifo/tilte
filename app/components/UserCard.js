import '../styles/user_card';

import React, { PropTypes } from 'react';
import { USER_AVATAR_PLACEHOLDER } from '../constants';
import Location from './Location';
import FollowAction from './FollowAction';
import UserStats from './UserStats';

const UserCard = (props) => {
  return(
    <section className='component__usercard'>
      <div className='user__details_wrap'>
        <div className='left__section'>
          <div className='user__avatar__wrap'>
            <img src={ USER_AVATAR_PLACEHOLDER || props.user.avatarUrl } className='avatar' />
          </div>
        </div>
        <div className='right__section'>
          <section className='user__main__details'>
            <div className='left user__data'>
              <span className='username'>{ `${ props.user.lastname } ${ props.user.firstname }` }</span>
              <Location latitude='6.5616' longitude='3.3842'/>
            </div>

            <div className='right user__action'>
              <FollowAction
                user={ props.userDetails }
                actorId={ props.actorId }
                actionCallback={ props.callbacks.followAction }/>
            </div>
          </section>

          <section className='user__stats'>
            <UserStats user={ props.userDetails }   />
          </section>
        </div>
      </div>
    </section>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  actorId: PropTypes.string,
  userDetails: PropTypes.object
};

export default UserCard
