import constants from '../constants';
import update from 'react-addons-update';

const initialBannerState = {
  slides: [{
    id: 1,
    imagePath: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    widgetText: 'test',
    widgetImage: '',
    widgetLink: 'www.facebook.com',
  },

  {
    id: 2,
    imagePath: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    widgetText: 'test2',
    widgetImage: '',
    widgetLink: 'www.facebook.com',
  }],

  currentSlideIndex: 0,
}

class BannerReducer {
  banners(state = initialBannerState, action) {
    let current = state.currentSlideIndex;

    switch (action.type) {
      case constants.BANNER_TOGGLE_NEXT:
        let next = current + 1;
        if(next > state.slides.length - 1) next = 0;
        return update(state, {
          currentSlideIndex: { $set: next }
        });

      case constants.BANNER_TOGGLE_PREV:
        let previous = current - 1;
        if(previous < 0)
          previous = (state.slides.length - 1);

        return update(state, {
          currentSlideIndex: { $set: previous }
        });
      default:
        return state;
    }
  }
}

export default new BannerReducer();
