require('../styles/header_profile');
import { Link } from 'react-router';

import React, { Component, PropTypes } from 'react';

const HeaderProfile = (props) => {
  return(
    <section className='component__header__profile'>
      <Link className='tilte__action_link btn btn-primary' to='/new_moment'>tilte!</Link>
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
