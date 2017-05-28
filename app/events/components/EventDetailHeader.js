require('../styles/event_detail_header');

import React, { Component, PropTypes } from 'react';
import Icon from '../../core/components/Icon';
import { EVENT_IMAGE_PLACEHOLDERS, USER_AVATAR_PLACEHOLDER } from '../constants';
import { ICON_ARROW_UP_CIRCLE, ICON_ARROW_DOWN_CIRCLE, ICON_SHARE } from '../../core/constants';
import update from 'immutability-helper';

class EventDetailHeader extends Component {
  constructor() {
    super();
    this.BANNER_TOGGLE_ICONS = {
      false: ICON_ARROW_DOWN_CIRCLE,
      true: ICON_ARROW_UP_CIRCLE,
    };

    this.BANNER_TOGGLE_STATE_DIMENSIONS = {
      false: '8.5em',
      true: '37em',
    };
  }

  handleBannerToggle() {
    this.setState(update(this.state, {
      shouldDisplayBanner: {
        $set: !this.state.shouldDisplayBanner
      }
    }));
  }

  handleBannerShare(event) {

  }

  //using componentDidMount will triger a re-render every time the state changes
  componentWillMount() {
    this.state = {
      shouldDisplayBanner: true,
      iconColor: '#d6d6d6',
    };
  }

  render() {
    const headerStyle = {
      backgroundImage: `url(${ EVENT_IMAGE_PLACEHOLDERS[3] })`,
      backgroundPosition: '20% 30%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: this.BANNER_TOGGLE_STATE_DIMENSIONS[this.state.shouldDisplayBanner],
    };

    return(
      <section className='component__eventdetail__header'
        style={headerStyle} >
        <div className='control__wrap'>
          <div className='event__banner__controls'>
            <span className='control toggle__banner' onClick={ this.handleBannerToggle.bind(this) }>
              <Icon icon={ this.BANNER_TOGGLE_ICONS[this.state.shouldDisplayBanner] } viewBox={ 100 } size={ 36 } color={ this.state.iconColor } />
            </span>

            <span className='control share'>
              <Icon icon={ ICON_SHARE } size={ 36 } viewBox={ 100 } color={ this.state.iconColor } onClick={ this.handleBannerShare.bind(this) } />
            </span>
          </div>
        </div>
      </section>
    );
  }
}

EventDetailHeader.propTypes = {
  eventObject: PropTypes.object.isRequired,
  actor: PropTypes.object,
}

export default EventDetailHeader;
