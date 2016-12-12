require('../styles/home.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ConfigActionCreators from '../actions/ConfigActionCreators';
import SlideActionCreators from '../actions/SlideActionCreators';
import FeedContainer from './FeedContainer';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import BannerSearch from '../components/BannerSearch';
import Feed from '../components//Feed';
import Footer from '../components/Footer';

const mapStateToProps = (state) => ({
  bannerConfig: state.config.bannerConfig,
  appDetails: state.config.appDetails,
  currentUser: state.config.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchConfigData: () => dispatch(ConfigActionCreators.fetchConfigData()),
  togglePreviousBanner: () => dispatch(SlideActionCreators.togglePrevious()),
  toggleNextBanner: () => dispatch(SlideActionCreators.toggleNext()),
  autoToggleBanner: () => setInterval(() => dispatch(SlideActionCreators.toggleNext()), 5000),
  updateCategoryPreference: () => dispatch(ConfigActionCreators.updateCategoryPreference()),
});

class HomeContainer extends Component {
  // componentWillMount() {
  //   // this.props.fetchConfigData();
  // }

  render() {
    return(
      <section className='index__shell'>
        <Header loggedInUser={ this.props.currentUser }
                appDetails={ this.props.appDetails } />
        <section className='banner__section'>
          <Carousel togglePrevious={ this.props.togglePreviousBanner }
          toggleNext={ this.props.toggleNextBanner }
          autoToggle={ this.props.autoToggleBanner }
          bannerConfig={ this.props.bannerConfig } />

          <BannerSearch/>
        </section>

        <FeedContainer />
        <Footer/>
      </section>
    );
  }
}

const ConnectedHomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
export default ConnectedHomeContainer;
