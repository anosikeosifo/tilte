import { BANNER_TOGGLE_NEXT, BANNER_TOGGLE_PREV } from './constants';
import { ASSETS_BASE_URL } from '../core/constants';
import update from 'immutability-helper';

const initialLayoutState = {
  carouselConfig: {
    slides: [{
      id: 1,
      imagePath: `${ ASSETS_BASE_URL }/images/image1.jpg`,
      widgetText: 'test',
      widgetImage: '',
      widgetLink: 'www.facebook.com',
      widgetTitle: 'Facebook',
    },

    {
      id: 2,
      imagePath: `${ ASSETS_BASE_URL }/images/image2.jpg`,
      widgetText: 'test2',
      widgetImage: '',
      widgetLink: 'www.yahoo.com',
      widgetTitle: 'Yahoo Mail',
    },

    {
      id: 3,
      imagePath: `${ ASSETS_BASE_URL }/images/image4.jpg`,
      widgetText: 'test2',
      widgetImage: '',
      widgetLink: 'www.gmail.com',
      widgetTitle: 'Twitter Mail',
    }],

    currentSlideIndex: 0,
  }
}

export const layoutData = (state = initialLayoutState, action) => {
  let { currentSlideIndex } = state.carouselConfig;

  switch (action.type) {
    case BANNER_TOGGLE_NEXT:
      let nextSlideIndex = currentSlideIndex + 1;
      if(nextSlideIndex > state.carouselConfig.slides.length - 1) nextSlideIndex = 0;

      return update(state, {
        carouselConfig: {
          currentSlideIndex: { $set: nextSlideIndex }
        }
      });

    case BANNER_TOGGLE_PREV:
      let prevSlideIndex = currentSlideIndex - 1;
      if(prevSlideIndex < 0) prevSlideIndex = state.carouselConfig.slides.length - 1;

      return update(state, {
        carouselConfig: {
          currentSlideIndex: { $set: prevSlideIndex }
        }
      });
    default:
      return state;
  }
}
