require('../styles/layout.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchConfigData, updateCategoryPreference } from '../actions/ConfigActionCreators';
import { togglePrevious, toggleNext } from '../actions/SlideActionCreators';
import WelcomePageContainer from './WelcomePageContainer';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import classNames from 'classnames';

const mapStateToProps = (state) => ({
  bannerConfig: state.config.bannerConfig,
  appDetails: state.config.appDetails,
  currentUser: state.config.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchConfigData: () => dispatch(fetchConfigData()),
  togglePreviousBanner: () => dispatch(togglePrevious()),
  toggleNextBanner: () => dispatch(toggleNext()),
  autoToggleBanner: () => setInterval(() => dispatch(toggleNext()), 5000),
  updateCategoryPreference: () => dispatch(updateCategoryPreference()),
});

class HomeContainer extends Component {
  // componentWillMount() {
  //   // this.props.fetchConfigData();
  // }

  render() {
    return(
      <section className='index__shell'>
        <Header loggedInUser={ this.props.currentUser }
                appDetails={ this.props.appDetails } usage={ this.constructor.name.toLowerCase() }/>
        <section className='banner__section'>
          <Carousel togglePrevious={ this.props.togglePreviousBanner }
          toggleNext={ this.props.toggleNextBanner }
          autoToggle={ this.props.autoToggleBanner }
          bannerConfig={ this.props.bannerConfig } />
        </section>

        <WelcomePageContainer currentUser={ this.props.currentUser }/>
        <Footer/>
      </section>
    );
  }
}

const ConnectedHomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
export default ConnectedHomeContainer;
