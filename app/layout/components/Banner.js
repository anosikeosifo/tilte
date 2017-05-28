require('../styles/banner.scss');

import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import SearchInput from '../../search/containers/SearchInputContainer';


const Banner = () => {
  return(
    <section className='component__banner'>
      <div className='bannner__text'>Discover.  Amazing.  Experiences.</div>
      <SearchInput triggerType='button_click'/>
    </section>
  );
}

export default Banner;
