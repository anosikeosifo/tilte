require('../styles/carousel.scss');

import React, { Component, PropTypes } from 'react';
import Slide from './Slide';


class Carousel extends Component {
  componentDidMount() {
    this.props.autoToggle();
  }

  render() {
    const { slides, currentSlideIndex } = this.props.carouselConfig;

    let slideComponents = slides.map((slide, index) => {
      let isActive = currentSlideIndex == index;

      return(
        <Slide active={ isActive }
         key={ slide.id }
         imagePath={ slide.imagePath }
         imageAlt={ slide.imageAlt }
         widgetText={ slide.text }
         widgetImage={ slide.widgetImage }
         widgetLink={ slide.widgetLink }
         widgetTitle = { slide.widgetTitle }/>
      );
    });

    return(
      <section className='component__carousel'>
        <div className='carousel__wrap'>
          <span className='toggle toggle__prev' onClick={ this.props.togglePrevious }>&lt;</span>

          <div className='slide__container'>
            <div className='slide_wrap'>
              { slideComponents }
            </div>
          <div className='slide__overlay'>
          </div>
          </div>

          <span className='toggle toggle__next' onClick={ this.props.toggleNext }>&gt;</span>
        </div>
      </section>
    );
  }
}

Carousel.propTypes = {
  togglePrevious: PropTypes.func.isRequired,
  toggleNext: PropTypes.func.isRequired,
  autoToggle: PropTypes.func,
  carouselConfig: PropTypes.object.isRequired,
}

export default Carousel;
