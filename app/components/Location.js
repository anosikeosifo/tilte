require('../styles/location.scss');

import React, { Component, PropTypes } from 'react';
import { ICON_LOCATION } from '../constants'
import Icon from './Icon';
import update from 'immutability-helper';

class Location extends Component {
  constructor() {
    super();

    this.state = {
      color: {
        active: '#ff5a5f',
        default: '#444',
      },
      iconColor: null,
    }
  }

  componentWillMount() {
    this.setState(Object.assign({}, this.state, {
      iconColor: this.state.color.default
    }));
  }

  getIconColor(uiState) {
    return this.state.color[uiState];
  }

  handleMouseEnter() {
    this.setState(update(this.state, {
      iconColor: { $set: this.getIconColor("active") }
    }));
  }

  handleMouseLeave() {
    this.setState(update(this.state, {
      iconColor: { $set: this.getIconColor("default") }
    }));
  }

  handleClick() {
    if(this.props.isEnabled) this.props.locationMapAction(this.props.eventObjectId, this.props.currentUser.id);
  }

  render() {
    return (
      <section className='component__location__marker'
        onMouseEnter={ this.handleMouseEnter.bind(this) }
        onMouseLeave={ this.handleMouseLeave.bind(this) }
        onClick={ this.handleClick.bind(this) }>
        <span className='location__string'>Lagos, Nigeria</span>
        <span className='separator middot'>&middot;</span>
        <Icon icon={ICON_LOCATION} color={ this.state.iconColor } size={ this.props.size }/>
      </section>
    );
  }
}

Location.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  size: PropTypes.number,

}

Location.defaultProps = {
  size: 16
}
export default Location;
