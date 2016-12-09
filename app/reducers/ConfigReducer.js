import constants from '../constants';
import update from 'react-addons-update';

const initialState = {
  bannerConfig: {
    slides: [{
      id: 1,
      imagePath: 'http://localhost:8080/images/image1.jpg',
      widgetText: 'test',
      widgetImage: '',
      widgetLink: 'www.facebook.com',
      widgetTitle: 'Facebook',
    },

    {
      id: 2,
      imagePath: 'http://localhost:8080/images/image2.jpg',
      widgetText: 'test2',
      widgetImage: '',
      widgetLink: 'www.yahoo.com',
      widgetTitle: 'Yahoo Mail',
    },

    {
      id: 3,
      imagePath: 'http://localhost:8080/images/image4.jpg',
      widgetText: 'test2',
      widgetImage: '',
      widgetLink: 'www.gmail.com',
      widgetTitle: 'Google Mail',
    }],

    currentSlideIndex: 0,
  },
  appDetails: {
    name: 'Borderless',
    logo: 'http://localhost:8080/images/logo.png',
  },
  currentUser: null,
}

class ConfigReducer {
  config(state = initialState, action) {
    let { currentSlideIndex } = state.bannerConfig;

    switch (action.type) {
      case constants.BANNER_TOGGLE_NEXT:
        let nextSlideIndex = currentSlideIndex + 1;
        if(nextSlideIndex > state.bannerConfig.slides.length - 1) nextSlideIndex = 0;

        return update(state, {
          bannerConfig: {
            currentSlideIndex: { $set: nextSlideIndex }
          }
        });

      case constants.BANNER_TOGGLE_PREV:
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
}

export default new ConfigReducer();
