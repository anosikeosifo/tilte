require('../styles/banner.scss');

import React, { Component, PropTypes } from 'react';
import BannerHelper from '../helpers/BannerHelper';
import BannerSlideContainer from './BannerSlideContainer';
import BannerActionCreators from '../actions/BannerActionCreators';

class Banner extends Component {
  componentDidMount() {
    this.props.autoToggle();
  }

  render() {
    return(
      <section className='app__banner'>
        <span className='toggle toggle__prev' onClick={ this.props.togglePrevious }>Prev</span>

        <BannerSlideContainer
          slides={ this.props.bannerConfig.slides }
          currentSlide={ this.props.bannerConfig.currentSlideIndex } />

        <span className='toggle toggle__next' onClick={ this.props.toggleNext }>Next</span>
      </section>
    );
  }
}

Banner.propTypes = {
  togglePrevious: PropTypes.func.isRequired,
  toggleNext: PropTypes.func.isRequired,
  autoToggle: PropTypes.func,
  bannerConfig: PropTypes.object.isRequired,
}

export default Banner;
