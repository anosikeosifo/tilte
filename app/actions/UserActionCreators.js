import constants from '../constants';

export default class UserActionCreators {
  static getCurrentUser(){
    return {
      type: constants.REQUEST_CURRENT_USER
    };
  }
}
