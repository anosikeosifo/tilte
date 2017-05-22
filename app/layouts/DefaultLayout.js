import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DefaultLayout = (props) => {
  const { setCurrentModal, currentUser, appDetails } = props;

  return(
    <div className='default__layout'>
      <Header loggedInUser={ currentUser } callBacks={ { setCurrentModal } } appDetails={ appDetails } usage='layout' />
      { props.children }
      <Footer/>
    </div>

  );
}

export default DefaultLayout;
