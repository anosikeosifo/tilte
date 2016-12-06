require('../styles/index.scss');

import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Banner from './Banner';
import Feed from './Feed';
import { connect } from 'react-redux';
import ConfigActionCreators from '../actions/ConfigActionCreators';
import BannerActionCreators from '../actions/BannerActionCreators';

const mapStateToProps = (state) => ({
  bannerConfig: state.config.bannerConfig,
  appDetails: state.config.appDetails,
  currentUser: state.config.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchConfigData: () => dispatch(ConfigActionCreators.fetchConfigData()),
  togglePreviousBanner: () => dispatch(BannerActionCreators.togglePrevious()),
  toggleNextBanner: () => dispatch(BannerActionCreators.toggleNext()),
  autoToggleBanner: () => setInterval(() => dispatch(BannerActionCreators.toggleNext()), 4000),
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

        <Banner togglePrevious={ this.props.togglePreviousBanner }
          toggleNext={ this.props.toggleNextBanner }
          autoToggle={ this.props.autoToggleBanner }
          bannerConfig={ this.props.bannerConfig } />

        <Feed/>
      </section>
    );
  }
}

const IndexWrap = connect(mapStateToProps, mapDispatchToProps)(Index);
export default IndexWrap;
