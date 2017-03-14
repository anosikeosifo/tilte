require('../styles/event_card.scss');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { FEED_IMAGE_PLACEHOLDERS, USER_AVATAR_PLACEHOLDER, CURRENCY_SYMBOLS } from '../constants';
import ActorCard from './ActorCard';
import LocationDetailsTrigger from './LocationDetailsTrigger';
import LikeTrigger from './LikeTrigger';
import CommentTrigger from './CommentTrigger';
import MoreInteractionsTrigger from './MoreInteractionsTrigger';
import update from 'immutability-helper';
import { Link } from 'react-router';

class EventCard extends Component {
  componentWillMount() {
    this.setState(Object.assign({}, this.state, {
      cardInteractionActive: false
    }));
  }

  handleMouseEnter() {
    this.setState(update(this.state, {
      cardInteractionActive: { $set: true }
    }));
  }

  handleMouseLeave() {
    this.setState(update(this.state, {
      cardInteractionActive: { $set: false }
    }));
  }

  handleClick() {

  }

  render() {
    const locationInfo = {
      latitude: '',
      longitude: '',
      actor: this.props.user,
    };

    const eventPricing = this.props.price == 0.00 ? 'Free' : `${ CURRENCY_SYMBOLS.naira }${ this.props.price }`;

    const classes = classNames({
      'event__wrap': true,
      [this.props.id]: true,
      'hover__active': this.state.cardInteractionActive
    });

    const EventDetailsURL = `/events/${ this.props.id }`;

    return(
      <article className='component__eventcard'>
        <Link to={ EventDetailsURL }>
          <figure className={ classes }
            onMouseEnter={ this.handleMouseEnter.bind(this) }
            onMouseLeave={ this.handleMouseLeave.bind(this) }
            onClick={ this.handleClick.bind(this) }>

            <section className='event_media_object'>
              <div className='event__img__wrap'>
                <img src={ FEED_IMAGE_PLACEHOLDERS[0] } alt='' className='event__img'/>
              </div>
              <div className='description__wrap'>
                <span>{ this.props.description }</span>
              </div>
            </section>
            <figcaption>
              <section className='item__main'>
                <div className='group__left item__metadata'>
                  <span className='nested location'>
                    { 'Lagos, Nigeria' || this.props.location.name }
                  </span>
                  <span>{ eventPricing }</span>
                </div>
                <div className='group__right'>
                  <span className='nested  more__interactions'>
                    <MoreInteractionsTrigger />
                  </span>
                </div>
              </section>
            </figcaption>
          </figure>
        </Link>
      </article>
    );
  }
}

EventCard.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default EventCard;
