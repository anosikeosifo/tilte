import constants from '../constants';
import ConfigAPI from '../api/ConfigAPI';

export default class ConfigActionCreators {
  static getAppData() {
    return (dispatch) => {
      dispatch({ type: constants.FETCH_APP_DATA });
    }
  }
  static fetchConfigData() {
    return (dispatch) => {
      dispatch({ type: constants.FETCH_CONFIG_DATA });
      ConfigAPI.fetchConfig().then(
        (config) => dispatch({ type: constants.RECEIVE_CONFIG_DATA, success: true, payload: config }),
        (error) => dispatch({ type: constants.RECEIVE_CONFIG_DATA, success: false, error })
      );
    }
  }

  static updateCategoryPreference() {
    return (dispatch) => {
      dispatch({ type: constants.UPDATE_CATEGORY_CONFIG });
    }
  }
}
