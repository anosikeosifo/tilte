require('../styles/header_profile');

import React, { Component, PropTypes } from 'react';

const HeaderProfile = (props) => {
  return(
    <section className='component__header__profile'>
      <span className='profile__image__wrap'>
        <img src={ props.currentUser.avatarUrl } className='image'/>
      </span>
    </section>
  );
}

HeaderProfile.PropTypes = {
  user: PropTypes.object
}

export default HeaderProfile;
