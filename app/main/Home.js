require('../layout/styles/layout.scss');

import React, { Component, PropTypes } from 'react';
import WelcomePageContainer from '../layout/containers/WelcomePageContainer';
import Header from '../layout/components/Header';
import CarouselContainer from '../layout/containers/CarouselContainer';
import Footer from '../layout/components/Footer';

const Home = (props) => {
  const { setCurrentModal, logoutUser, configData: { appDetails, carouselConfig}, authData: { currentUser } } = props;
  return(
    <section className='index__shell'>
      <Header loggedInUser={ currentUser }
              appDetails={ appDetails }
              usage={ 'home' }
              callBacks={ { setCurrentModal, logoutUser } }/>

      <CarouselContainer carouselConfig={ carouselConfig } />

      <WelcomePageContainer currentUser={ currentUser }/>
      <Footer/>
    </section>
  );
};

export default Home;
