import '../styles/like_trigger.scss';

import React, { Component, PropTypes } from 'react';
import { ICON_FAVORITE } from 'constants';
import classNames from 'classnames';
import Icon from './Icon';
import update from 'react-addons-update';

class LikeTrigger extends Component {
  constructor() {
    super();

    this.state = {
      color: {
        active: '#ffa600',
        default: '#c1c1c1',
      },
      iconColor: null,
    }
  }

  componentWillMount() {
    this.setState(Object.assign({}, this.state, { 
      iconColor: this.getIconColor(this.props.activeState)
    }));
  }

  getIconColor(interactionState) {
    return this.state.color[interactionState];
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
    if(this.props.isEnabled) this.props.likeAction(this.props.momentId, "1");
  }

  render() {
    let triggerDOM = null;

    if (this.props.isEnabled) {
      triggerDOM = (<section className='component__like__triger'
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
