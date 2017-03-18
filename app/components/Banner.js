require('../styles/banner.scss');

import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import TextSearch from './TextSearch';


const Banner = () => {
  return(
    <section className='component__banner'>
      <div className='bannner__text'>Discover.  Amazing.  Experiences.</div>
      <TextSearch triggerType='button_click'/>
    </section>
  );
}

export default Banner;
