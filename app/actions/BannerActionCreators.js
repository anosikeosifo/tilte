import constants from '../constants';

export default class BannerActionCreators {
  static toggleNext() {
    return ({
      type: constants.BANNER_TOGGLE_NEXT,
    });
  }

  static togglePrevious() {
    return ({
      type: constants.BANNER_TOGGLE_PREV,
    });
  }
}
