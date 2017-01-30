require('../styles/actor_card.scss');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { USER_AVATAR_PLACEHOLDER } from '../constants';
import { Link } from 'react-router';


class ActorCard extends Component {
  handleClick() {

  }

  render() {
    return(
      <section className='component__actor__card' onClick={ this.handleClick.bind(this)}>
        <span className='user__image__wrap'>
          <img className='image' src={ this.props.actor.avatarUrl || USER_AVATAR_PLACEHOLDER }/>
        </span>
        if(this.props.showDetails){
          <span className='user__name__wrap'>{ this.props.actor.fullname }</span>
        }
      </section>
    );
  }
}

ActorCard.propTypes = {
  actor: PropTypes.object.isRequired,
  actionTimeStamp: PropTypes.string,
  actionLocation: PropTypes.string,
  actionType: PropTypes.string,
  showDetails: PropTypes.bool,
}

ActorCard.defaultProps = {
  showDetails: true
}

export default ActorCard;
