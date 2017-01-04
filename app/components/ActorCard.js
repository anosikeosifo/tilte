import '../styles/actor_card.scss';

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import constants from '../constants';
import { Link } from 'react-router';


const ActorCard = (props) => {
  // const actorName = `${ props.actor.firstname } ${ props.actor.lastname }`;
  const topInterest = 'Sports';
  return(
    <section className='component__actor__card'>
      <span className='user__image__wrap'>
        <img className='image' src={ props.actor.avatarUrl || constants.USER_AVATAR_PLACEHOLDER }/>
      </span>
      <span className='other__details'>
        <span className='actor__name'>{ props.actor.fullname }</span>
        <span className='top__interest'><Link to='' className='link'>{ topInterest }</Link></span>
      </span>
    </section>
  );
}

ActorCard.propTypes = {
  actor: PropTypes.object.isRequired,
  actionTimeStamp: PropTypes.string,
  actionLocation: PropTypes.string,
  actionType: PropTypes.string,
}

export default ActorCard;
