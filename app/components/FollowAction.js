require('../styles/follow_action.scss');

import React, { Component, PropTypes } from 'react';
import { ICON_FOLLOW_USER } from '../constants'
import Icon from './Icon';
import update from 'immutability-helper';
import classNames from 'classnames';


class FollowAction extends Component {
  constructor() {
    super();
    this.state = {
      iconColor: '#ff5a5f'
    };
  }

  componentWillMount() {
    this.setState(update(this.state, {
      action: { $set: this.props.user.canBeFollowed ? 'Follow' : 'unfollow' },
      actionText: { $set: this.props.user.canBeFollowed ? 'Follow' : 'Following' },
      showIcon: { $set: this.props.user.canBeFollowed }
    }));
  }

  getIcon(uiState) {
    return this.state.icons[uiState];
  }

  handleMouseOver() {
    this.setState(update(this.state, {
      actionText: { $set: this.setButtonText(true) }
    }));
  }

  handleMouseLeave() {
    this.setState(update(this.state, {
      actionText: { $set: this.setButtonText(false) },
      showIcon: { $set: this.props.user.canBeFollowed }
    }));
  }

  setButtonText(hoverState) {
    return hoverState ? 'Unfollow' : 'Following';
  }

  handleClick() {
    //note the follow action could either be follow or unfollow
    //TODO:: Replace 7 with the logged in user id
    if(this.props.isEnabled) this.props.actionCallback(this.state.action, this.props.user.id, '7');
  }

  render() {
    const iconClassList = classNames({
      'icon__wrap': true,
      hidden: !this.state.showIcon
    });

    return (
      <button className={`component__follow__action btn btn-primary-bordered btn-${ this.props.size }`}
        onMouseOver={ this.props.isFollowing ? this.handleMouseOver.bind(this) : '' }
        onMouseLeave={ this.props.isFollowing ? this.handleMouseLeave.bind(this) : '' }
        onClick={ this.handleClick.bind(this) }>
        <div>
          <span className={ iconClassList }>
            <Icon icon={ ICON_FOLLOW_USER } color={ this.state.iconColor } size={16} />
          </span>
          <span className='action__text'>{ this.state.actionText }</span>
        </div>
      </button>
    );
  }
}

FollowAction.propTypes = {
  size: PropTypes.string,
  isFollowing: PropTypes.bool.isRequired,
}

FollowAction.defaultProps = {
  size: 'medium',
  isEnabled: true,
}

export default FollowAction;
