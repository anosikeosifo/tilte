require('../styles/follow_action.scss');

import React, { Component, PropTypes } from 'react';
import { ICON_FOLLOW_USER } from '../constants'
import Icon from '../../core/components/Icon';
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
    const { actorId, user } = nextProps;

    this.setState(update(this.state, {
      $merge: {
        actionText: (!actorId || user.canBeFollowed) ? 'Follow' : 'Following',
        action: (!actorId || user.canBeFollowed) ? 'follow' : 'unfollow',
        showIcon: (!actorId || user.canBeFollowed),
      }
    }));
  }

  handleMouseOver() {
    this.actionTextContainer.innerText = 'Unfollow';
  }

  handleMouseLeave() {
    this.actionTextContainer.innerText = 'Following';
  }

  handleClick() {
    if(this.props.actorId) {
      this.props.callbacks.followAction(this.state.action, this.props.user.id, '7');
    } else {
      this.props.callbacks.showSignupModal();
    }
  }

  render() {
    if (this.props.user == undefined) {
      return this.renderLoadState();
    } else {
      return this.renderComponentElements();
    }
  }

  renderComponentElements() {
    const { user, actorId } = this.props;
    const iconClassList = classNames({
      'icon__wrap': true,
      hidden: actorId && !user.canBeFollowed
    });

    return (
      <button className={`component__follow__action btn btn-primary-bordered btn-${ this.props.size }`}
        onMouseOver={ (actorId && !user.canBeFollowed) ? this.handleMouseOver.bind(this) : '' }
        onMouseLeave={ (actorId && !user.canBeFollowed) ? this.handleMouseLeave.bind(this) : '' }
        onClick={ this.handleClick.bind(this) }>
        <div>
          <span className={ iconClassList }>
            <Icon icon={ ICON_FOLLOW_USER } color={ this.state.iconColor } size={16} />
          </span>
          <span className='action__text' ref={ (ref) => this.actionTextContainer = ref }>{ this.state.actionText }</span>
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
