import '../styles/like_trigger.scss';

import React, { Component, PropTypes } from 'react';
import { ICON_FAVORITE } from 'constants';
import classNames from 'classnames';
import Icon from './Icon';

class LikeTrigger extends Component {
  constructor() {
    super();

    this.state = {
      iconColor: '#c1c1c1',
    }
  }

  handleMouseEnter() {
    this.setState({ iconColor: '#ffa600' });
  }

  handleMouseLeave() {
    this.setState({ iconColor: '#c1c1c1' });
  }

  handleClick() {
    this.props.likeAction(this.props.momentId, "1");
  }

  render() {
    return(
      <section className='component__like__triger'
       onMouseEnter={ this.handleMouseEnter.bind(this) } 
       onMouseLeave={ this.handleMouseLeave.bind(this) }
       onClick={ this.handleClick.bind(this) }>
        <span>
          <Icon icon={ICON_FAVORITE} color={ this.state.iconColor } />
        </span>
      </section>
    );
  }
}

LikeTrigger.PropTypes = {
  user: PropTypes.object
}

export default LikeTrigger;
