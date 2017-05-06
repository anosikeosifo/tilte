import '../styles/attendance';
import React, { ReactDOM, PropTypes } from 'react';
import SocialConnect from './SocialConnect';
import Attendee from './Attendee';

const renderEmptyNotice = (props) => {
  return(
    <section className='attendee__list__empty'>
      <span>Be the first to attend!</span>
    </section>
  );
}

const renderList = (props) => {
  let attendeeList = props.attendees.map((attendee) => (
    <div className='item'>
      <Attendee user={ attendee }/>
    </div>
  ));

  return (
    <div className='attendee__list'>
      { attendeeList }
    </div>
  );
};

const Attendance = (props) => {
  console.log('this.attendees :', props.attendees);

  const renderComponentDOM = props.attendees.length ? renderList : renderEmptyNotice;
  return(
    <section className='component__attendance'>
      { renderComponentDOM(props) }
    </section>
  )
}

Attendance.propTypes = {
  attendees: PropTypes.array,
  actor: PropTypes.object,
}

export default Attendance;
