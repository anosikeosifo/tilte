import '../styles/event_description';

import React, { PropTypes } from 'react';

const EventDescription = (props) => {
  return(
    <section className='component__event__description'>
      <div className='section__header'><span>{ "About this event" }</span></div>
      <p>{ props.eventObject.description || "hello! welcome to tilte, the place where we share the most fun experiences!" }</p>
    </section>
  );
}


export default EventDescription;
