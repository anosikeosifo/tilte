require('../styles/moment_card.scss');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { FEED_IMAGE_PLACEHOLDERS, USER_AVATAR_PLACEHOLDER } from '../constants';
import ActorCard from '../../users/components/ActorCard';
import LocationDetailsTrigger from '../../location/components/LocationDetailsTrigger';
import LikeTrigger from '../../core/components/LikeTrigger';
import CommentTrigger from '../../comments/components/CommentTrigger';
import MoreInteractionsTrigger from '../../core/components/MoreInteractionsTrigger';
import update from 'immutability-helper';
import { Link } from 'react-router';

class MomentCard extends Component {
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

    const classes = classNames({
      'event__wrap': true,
      [this.props.id]: true,
      'hover__active': this.state.cardInteractionActive
    });

    const EventDetailsURL = `/events/${ this.props.id }`;

    return(
      <article className='component__momentcard'>
        <Link to={ EventDetailsURL }>
          <figure className={ classes }
            onMouseEnter={ this.handleMouseEnter.bind(this) }
            onMouseLeave={ this.handleMouseLeave.bind(this) }
            onClick={ this.handleClick.bind(this) }>

            <section className='event_media_object'>
              <img src={ FEED_IMAGE_PLACEHOLDERS[0] } alt='' className='feed_img'/>
            </section>
            <figcaption>
              <section className='item__main'>
                <span className='item__metadata'>
                  <span className='timestamp'>3m</span>
                  &middot;
                  <span className='nested location'>
                    <LocationDetailsTrigger metadata={ locationInfo } />
                  </span>
                </span>
                <div className='item__content'>
                  { this.props.desription || "hello! welcome to tilte, the place where we share the most fun experiences!" }
                </div>
              </section>

              <section className='item__interactions'>
                <span className='nested user'>
                  <ActorCard actor={ this.props.user }/>
                </span>
                <div className='action__group'>
                  <span className='nested like'>
                    <LikeTrigger eventId={ this.props.id } isEnabled={ !this.props.is_favorite } uiState={ this.props.is_favorite ? "active" : "default" } likeAction={ this.props.actions.like } actor={ this.props.currentUser } />
                  </span>
                  <span className='nested comment'>
                    <CommentTrigger />
                  </span>
                  <span className='nested  more'>
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

MomentCard.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default MomentCard;
