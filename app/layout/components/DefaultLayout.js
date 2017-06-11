import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = (props) => {
  const { callbacks, currentUser, appDetails } = props;

  return(
    <div className='default__layout'>
      <Header loggedInUser={ currentUser } callBacks={ callbacks } appDetails={ appDetails } usage='layout' />
      { props.children }
      <Footer/>
    </div>

  );
}

export default DefaultLayout;
