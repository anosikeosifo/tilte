require('../styles/carousel.scss');

import React, { Component, PropTypes } from 'react';
import BannerHelper from '../helpers/BannerHelper';
import SlideContainer from './SlideContainer';

class Carousel extends Component {
  componentDidMount() {
    this.props.autoToggle();
  }

  render() {
    return(
      <section className='carousel'>
        <span className='toggle toggle__prev' onClick={ this.props.togglePrevious }>&lt;</span>

        <SlideContainer
          slides={ this.props.bannerConfig.slides }
          currentSlide={ this.props.bannerConfig.currentSlideIndex } />

        <span className='toggle toggle__next' onClick={ this.props.toggleNext }>&gt;</span>
      </section>
    );
  }
}

Carousel.propTypes = {
  togglePrevious: PropTypes.func.isRequired,
  toggleNext: PropTypes.func.isRequired,
  autoToggle: PropTypes.func,
  bannerConfig: PropTypes.object.isRequired,
}

export default Carousel;
