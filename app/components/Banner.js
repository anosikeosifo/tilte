require('../styles/banner.scss');

import React, { Component, PropTypes } from 'react';
import BannerHelper from '../helpers/BannerHelper';
import BannerSlideContainer from './BannerSlideContainer';
import BannerActionCreators from '../actions/BannerActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  bannerConfig: state.bannerConfig
});

const mapDispatchToProps = (dispatch) => ({
  fetchBannerData: () => dispatch(BannerActionCreators.fetchBannerData()),
  togglePrevious: () => dispatch(BannerActionCreators.togglePrevious()),
  toggleNext: () => dispatch(BannerActionCreators.toggleNext()),
  autoToggle: () => setInterval(() => dispatch(BannerActionCreators.toggleNext()), 2000),
});

class Banner extends Component {
  componentDidMount() {
    this.props.autoToggle();
  }

  render() {
    return(
      <section className='app__banner'>
        <div className='banner__wrap'>
          <div className='toggle toggle__prev' onClick={ this.props.togglePrevious }>Prev</div>
          <BannerSlideContainer
            slides={ this.props.bannerConfig.slides }
            currentSlide={ this.props.bannerConfig.currentSlideIndex } />

          <div className='toggle toggle__next' onClick={ this.props.toggleNext }>Next</div>
        </div>
      </section>
    );
  }
}

const BannerContainer = connect(mapStateToProps, mapDispatchToProps)(Banner);

export default BannerContainer;
