require('../styles/event_action.scss');
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../../core/components/Icon';
import { ICON_ADD_EVENT, ICON_ATTENDANCE_CONFIRMED } from '../constants';
import { ICON_ARROW_DOWN } from '../../core/constants';


class EventActions extends Component {
  handleTriggerAction(actionName) {
    if(this.props.actor) {
      actionName(this.props.eventId, this.props.actor.id);
    } else {
      this.props.callBacks.setCurrentModal('signup');
    }
  }

  buildRegisterAction() {
    return this.props.actionsSet.map((action) => {
      return (
        <button key={ action.title }
          className={ classNames({
            'btn btn-primary btn-large': true,
            event__action: true,
            [action.key.toLowerCase()]: true,
          })}
          onClick={ this.handleTriggerAction.bind(this, action.value) }>
          <span className='icon__wrap'>
            <Icon icon={ ICON_ADD_EVENT } color='#fff' size={24}/>
          </span>
          <span className='action__text'>{ action.title }</span>
        </button>
      );
    });
  }

  renderComponent() {
    if(this.props.isAttending)
      return (
        <div className='registration__confirmed btn btn-confirmed btn-large'>
          <span className='icon__wrap'>
            <Icon icon={ ICON_ATTENDANCE_CONFIRMED } color='#338e57' size={24}/>
          </span>
          <span className='registered__label'>{ "You're attending!" }</span>
          <span className='registered__more__ctions icon__wrap'>
            <Icon icon={ ICON_ARROW_DOWN } color='#338e57' size={24}/>
          </span>
        </div>
      );
    else {
      return this.buildRegisterAction();
    }
  }

  render() {
    const classnames = classNames({
      event__action: true,
    });

    return(
      <div className='component__eventaction'>
        { this.renderComponent() }
      </div>
    );
  }
}

EventActions.propTypes = {
  actor: PropTypes.object,
  actionsSet: PropTypes.array.isRequired,
  isAttending: PropTypes.bool.isRequired
}

EventActions.defaultProps = {
  isAttending: false
}

export default EventActions;
