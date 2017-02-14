require('../styles/like_trigger.scss');

import React, { Component, PropTypes } from 'react';
import { ICON_FAVORITE } from '../constants';
import classNames from 'classnames';
import Icon from './Icon';
import update from 'immutability-helper';

class LikeTrigger extends Component {
  constructor() {
    super();

    this.state = {
      color: {
        active: '#ff5a5f',
        default: '#c1c1c1',
      },
      iconColor: null,
    }
  }

  componentWillMount() {
    this.setState(Object.assign({}, this.state, { 
      iconColor: this.getIconColor(this.props.uiState)
    }));
  }

  getIconColor(uiState) {
    return this.state.color[uiState];
  }

  handleMouseEnter() {
    if(this.props.isEnabled) {
      this.setState(update(this.state, { 
        iconColor: { $set: this.getIconColor("active") }
      }));
    }
  }

  handleMouseLeave() {
    if(this.props.isEnabled) {
      this.setState(update(this.state, { 
        iconColor: { $set: this.getIconColor("default") }
      }));
    }
  }

  handleClick() {
    if(this.props.isEnabled) this.props.likeAction(this.props.momentId, "7");
  }

  render() {
    let triggerDOM = null;
    if (this.props.isEnabled) {
      triggerDOM = (<section className='component__like__triger enabled'
        onMouseEnter={ this.handleMouseEnter.bind(this) } 
        onMouseLeave={ this.handleMouseLeave.bind(this) }
        onClick={ this.handleClick.bind(this) }>
          <Icon icon={ICON_FAVORITE} color={ this.state.iconColor } />
        </section>)
    } else {
      triggerDOM = (
        <section className='component__like__triger'>
          <Icon icon={ICON_FAVORITE} color={ this.state.iconColor } />
        </section>
      );
    }

    return triggerDOM;
  }
}

LikeTrigger.PropTypes = {
  user: PropTypes.object
}

export default LikeTrigger;
