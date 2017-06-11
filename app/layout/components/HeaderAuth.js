require('../styles/header_auth');

import React, { Component, PropTypes } from 'react';

const HeaderAuth = (props) => {

  const updateCurrentModal = (modalName) => {
    props.callbacks.setCurrentModal(modalName)
  }

  return(
    <section className='component__header__auth'>
      <div className='auth__links__wrap'>
        { /*<span className='help trigger'>Help</span> */ }
        <span className='signup trigger' onClick={ updateCurrentModal.bind(null, 'signup') } >Signup</span>
        <span className='login trigger' onClick={ updateCurrentModal.bind(null, 'login') } >Login</span>
      </div>
    </section>
  );
}

export default HeaderAuth;
