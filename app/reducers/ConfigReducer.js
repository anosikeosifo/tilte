import { BANNER_TOGGLE_NEXT, BANNER_TOGGLE_PREV, ASSETS_BASE_URL } from '../constants';
import update from 'immutability-helper';

const initialState = {
  bannerConfig: {
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
      widgetTitle: 'Google Mail',
    }],

    currentSlideIndex: 0,
  },
  appDetails: {
    name: 'Borderless',
    logo: `${ ASSETS_BASE_URL }/images/logo.png`,
  },
  currentUser: { id: '7', fullname: 'Anosike Osifo', firstname: 'Osifo', lastname: 'Anosike', email: 'social.anosikeosifo@gmail.com' },
}

export const configData = (state = initialState, action) => {
  let { currentSlideIndex } = state.bannerConfig;

  switch (action.type) {
    case BANNER_TOGGLE_NEXT:
      let nextSlideIndex = currentSlideIndex + 1;
      if(nextSlideIndex > state.bannerConfig.slides.length - 1) nextSlideIndex = 0;

      return update(state, {
        bannerConfig: {
          currentSlideIndex: { $set: nextSlideIndex }
        }
      });

    case BANNER_TOGGLE_PREV:
      let prevSlideIndex = currentSlideIndex - 1;
      if(prevSlideIndex < 0) prevSlideIndex = state.bannerConfig.slides.length - 1;

      return update(state, {
        bannerConfig: {
          currentSlideIndex: { $set: prevSlideIndex }
        }
      });

    default:
      return state;
  }
}
