require('../styles/location_details_trigger.scss');


import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const LocationDetailsTrigger = (props) => {
  return(
    <section className='component__location_details_trigger'>
      Lagos, Nigeria
    </section>
  );
}

LocationDetailsTrigger.PropTypes = {
  metadata: PropTypes.object
}

export default LocationDetailsTrigger;
