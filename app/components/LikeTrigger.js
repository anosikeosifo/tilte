import '../styles/like_trigger.scss';

import React, { Component, PropTypes } from 'react';
import { ICON_FAVORITE } from 'constants';
import classNames from 'classnames';
import Icon from './Icon';

class LikeTrigger extends Component {
  constructor() {
    super();

    this.state = {
      icon: {
        active: '#ffa600',
        default: '#c1c1c1',
      },

      disabled: false,
    }
  }

  handleMouseEnter() {
    if(!this.state.disabled) {
      this.setState({ iconColor: '#ffa600' });
    }
  }

  handleMouseLeave() {
    if(!this.state.disabled) {
      this.setState({ iconColor: '#c1c1c1' });
    }
  }

  handleClick() {
    this.props.likeAction(this.props.momentId, "1");
  }

  render() {
    let triggerDOM = null;

    if (!this.state.disabled) {
      triggerDOM = (<section className='component__like__triger'
         onMouseEnter={ this.handleMouseEnter.bind(this) } 
         onMouseLeave={ this.handleMouseLeave.bind(this) }
         onClick={ this.handleClick.bind(this) }>
          <span>
            <Icon icon={ICON_FAVORITE} color={ this.state.icon[this.props.activeState] } />
          </span>
        </section>)
    } else {
      triggerDOM = (
        <section className='component__like__triger'>
          <span>
            <Icon icon={ICON_FAVORITE} color={ this.state.icon[this.props.activeState] } />
          </span>
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
