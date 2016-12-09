import React, { Component, PropTypes } from 'react';
import Slide from './Slide';

class SlideContainer extends Component {
  render() {
    let slides = this.props.slides.map((slide, index) => {
      let isActive = this.props.currentSlide == index;

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
      <div className='slide__container'>
        <div className='slide_wrap'>
          { slides }
        </div>
        <div className='slide__overlay'>
        </div>
      </div>
    );
  }
}


SlideContainer.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default SlideContainer;
