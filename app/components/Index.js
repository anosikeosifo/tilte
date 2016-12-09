require('../styles/index.scss');

import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Carousel from './Carousel';
import BannerSearch from './BannerSearch';
import Feed from './Feed';
import Footer from './Footer';
import { connect } from 'react-redux';
import ConfigActionCreators from '../actions/ConfigActionCreators';
import SlideActionCreators from '../actions/SlideActionCreators';

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

class Index extends Component {
  componentWillMount() {
    // this.props.fetchConfigData();
  }

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

        <Feed/>
        <Footer/>
      </section>
    );
  }
}

const IndexWrap = connect(mapStateToProps, mapDispatchToProps)(Index);
export default IndexWrap;
