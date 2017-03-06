import React, { Component, PropTypes } from 'react';


class EventActions extends Component {
  componentWillMount() {

  }

  triggerAction(actionName) {
    actionName(this.props.eventId, this.props.actor.id);
    // this.props.actionsSet[actionName]();
  }

  render() {
    let options = this.props.actionsSet.map((action) => {
      return (<option key={ action.title } className={action.title.toLowerCase()} onSelect={ this.triggerAction(action.value) }>{ action.title }</option>);
    });

    return(
      <select className='eventaction_options'>
        { options }
      </select>
    );
  }
}

EventActions.propTypes = {
  actor: PropTypes.object,
  actionsSet: PropTypes.array.isRequired,
}

export default EventActions;
