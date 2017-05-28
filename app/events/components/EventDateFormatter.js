import React, { PropTypes, Component } from 'react';

class EventDateFormatter extends Component {
  evaluateDateValue(date) {
    return({
      date: 'Tomorrow',
      time: '12:00pm'
    })
  }
  render() {
    const startDate = this.evaluateDateValue(this.props.startDate);
    const endDate = this.evaluateDateValue(this.props.endDate);

    return(
      <section className='component__dateformatter'>
        <span className='start'>
          <span>{ startDay }</span>
          <span>{ startTime }</span>
        </span>

        <span className='end'>
          <span>{ endDay }</span>
          <span>{ endTime }</span>
        </span>
      </section>
    );
  }
}
