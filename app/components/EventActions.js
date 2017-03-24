import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class EventActions extends Component {

  handleTriggerAction(actionName) {
    actionName(this.props.eventId, this.props.actor.id);
    // this.props.actionsSet[actionName]();
  }

  buildActionUI() {
    return this.props.actionsSet.map((action) => {
      return (
        <button key={ action.title }
          className={ classNames({
            event__action: true,
            [action.key.toLowerCase()]: true
          })}
          onClick={ this.handleTriggerAction.bind(this, action.value) }>
          { action.title }
        </button>
      );
    });
  }

  renderComponent() {
    if(this.props.is_registered)
      return (<span>Registered!</span>);
    else {
      return this.buildActionUI();
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
}

export default EventActions;
