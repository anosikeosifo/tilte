import { CONFIG_ACTIONS, OAUTH_ACTIONS, BANNER_TOGGLE_NEXT, BANNER_TOGGLE_PREV, ASSETS_BASE_URL, USER_AVATAR_PLACEHOLDER } from '../constants';
import update from 'immutability-helper';

const initialState = {
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
  },
  appDetails: {
    name: 'Borderless',
    logo: `${ ASSETS_BASE_URL }/images/logo.png`,
  },

  currentUser: null,

  // currentUser: { id: '7',
  //   fullname: 'Anosike Osifo',
  //   firstname: 'Osifo',
  //   lastname: 'Anosike',
  //   email: 'social.anosikeosifo@gmail.com',
  //   avatarUrl: USER_AVATAR_PLACEHOLDER
  // },

  currentModal: null,
}

export const configData = (state = initialState, action) => {
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

    case CONFIG_ACTIONS.updateCurrentModal:
      return update(state, {
        currentModal: { $set: action.payload }
      });

    case OAUTH_ACTIONS.setGuestUser:
      console.log('setguest user triggered')
      return update(state, {
        currentUser: { $set: null }
      });

    case OAUTH_ACTIONS.facebookAuthVerifyRequest:
      console.log('facebookAuthVerifySuccess triggered')
      return update(state, {
        currentUser: { $set: null }
      });

    default:
      return state;
  }
}
