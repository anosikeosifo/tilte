require('../styles/layout.scss');

import React, { Component, PropTypes } from 'react';
import WelcomePageContainer from '../containers/WelcomePageContainer';
import Header from './Header';
import CarouselContainer from '../containers/CarouselContainer';
import Footer from './Footer';

const Home = (props) => {
  const { setCurrentModal, configData: { currentUser, appDetails, carouselConfig} } = props;
  return(
    <section className='index__shell'>
      <Header loggedInUser={ currentUser }
              appDetails={ appDetails }
              usage={ 'home' }
              callBacks={ { setCurrentModal } }/>

      <CarouselContainer carouselConfig={ carouselConfig } />

      <WelcomePageContainer currentUser={ currentUser }/>
      <Footer/>
    </section>
  );
};

export default Home;
