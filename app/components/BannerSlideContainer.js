import React, { Component, PropTypes } from 'react';
import BannerSlide from './BannerSlide';

class BannerSlideContainer extends Component {
  render() {
    let slides = this.props.slides.map((slide, index) => {
      let isActive = this.props.currentSlide == index;

      return(
        <BannerSlide active={ isActive }
         key={ slide.id }
         imagePath={ slide.imagePath }
         imageAlt={ slide.imageAlt }
         widgetText={ slide.text }
         widgetImage={ slide.widgetImage }
         widgetLink={ slide.widgetLink } />
      );
    });

    return(
      <div className='slide__container'>
        { slides }
      </div>
    );
  }
}


BannerSlideContainer.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default BannerSlideContainer;
