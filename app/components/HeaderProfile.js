import React, { Component, PropTypes } from 'react';

const HeaderProfile = (props) => {
  return(
    <section className='header__profile'>{ props.currentUser.fullname }</section>
  );
}

HeaderProfile.PropTypes = {
  user: PropTypes.object
}

export default HeaderProfile;
