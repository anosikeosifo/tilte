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
      iconColor: '#ff5a5f',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.props.user && nextProps.user) return true;
    if (this.props.user && (nextProps.user.canBeFollowed != this.props.user.canBeFollowed)) return true;
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState(update(this.state, {
      $merge: {
        actionText: nextProps.user.canBeFollowed ? 'Follow' : 'Following',
        action: nextProps.user.canBeFollowed ? 'follow' : 'unfollow',
        showIcon: nextProps.user.canBeFollowed,
      }
    }));
  }

  getIcon(uiState) {
    return this.state.icons[uiState];
  }

  handleMouseOver() {
    this.actionTextContainer.innerText = 'Unfollow';
  }

  handleMouseLeave() {
    this.actionTextContainer.innerText = 'Following';
  }

  handleClick() {
    //note the follow action could either be follow or unfollow
    //TODO:: Replace 7 with the logged in user id
    // if(this.props.isEnabled)
    this.props.actionCallback(this.state.action, this.props.user.id, '7');
  }

  render() {
    if(!this.props.actorId) {
      return this.renderAuthTrigger()
    }

    if (this.props.user == undefined) {
      return this.renderLoadState();
    } else {
      return this.renderComponentElements();
    }
  }

  renderComponentElements() {
    const iconClassList = classNames({
      'icon__wrap': true,
      hidden: !this.props.user.canBeFollowed
    });

    return (
      <button className={`component__follow__action btn btn-primary-bordered btn-${ this.props.size }`}
        onMouseOver={ !this.props.user.canBeFollowed ? this.handleMouseOver.bind(this) : '' }
        onMouseLeave={ !this.props.user.canBeFollowed ? this.handleMouseLeave.bind(this) : '' }
        onClick={ this.handleClick.bind(this) }>
        <div>
          <span className={ iconClassList }>
            <Icon icon={ ICON_FOLLOW_USER } color={ this.state.iconColor } size={16} />
          </span>
          <span className='action__text' ref={  (ref) => this.actionTextContainer = ref }>{ this.state.actionText }</span>
        </div>
      </button>
    );
  }

  renderLoadState() {
    return (
      <div className='follow__action__container'>
        <span className='loader'>...</span>
      </div>
    );
  }

  renderAuthTrigger() {
    return (
      <div className='follow__action__container'>
        <span className='loader'>Auth</span>
      </div>
    );
  }
}

FollowAction.propTypes = {
  size: PropTypes.string,
  user: PropTypes.object,
  actor: PropTypes.object,
}

FollowAction.defaultProps = {
  size: 'medium',
  // isEnabled: true,
}

export default FollowAction;
