require('../styles/moment.scss');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { FEED_IMAGE_PLACEHOLDERS, USER_AVATAR_PLACEHOLDER } from '../constants';
import ActorCard from './ActorCard';
import LocationDetailsTrigger from './LocationDetailsTrigger';
import LikeTrigger from './LikeTrigger';
import CommentTrigger from './CommentTrigger';
import MoreInteractionsTrigger from './MoreInteractionsTrigger';
import update from 'immutability-helper';
import { Link } from 'react-router'; 

class Moment extends Component {
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
      'moment__wrap': true,
      [this.props.id]: true,
      'hover__active': this.state.cardInteractionActive
    });

    const momentDetailsURL = `/moment/${ this.props.id }`;

    return(
      <article className='component__moment'>
        <Link to={ momentDetailsURL }>
        <figure className={ classes } 
          onMouseEnter={ this.handleMouseEnter.bind(this) }
          onMouseLeave={ this.handleMouseLeave.bind(this) }
            onClick={ this.handleClick.bind(this) }>

            <section className='moment_media_object'>
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
                    <LikeTrigger momentId={ this.props.id } isEnabled={ !this.props.is_favorite } uiState={ this.props.is_favorite ? "active" : "default" } likeAction={ this.props.actions.like }/>
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

Moment.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default Moment;
