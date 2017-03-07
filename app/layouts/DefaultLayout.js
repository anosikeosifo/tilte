import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DefaultLayout = (props) => {
  return(
    <div className='default__layout'>
      <Header loggedInUser={ props.currentUser } appDetails={ props.appDetails } />
        { props.children }
      <Footer/>
    </div>

  );
}

export default DefaultLayout;
