import constants from '../constants';
import SessionUtils from '../utils/SessionStorage';
import update from 'react-addons-update';

class UserReducer {
  users(state = [], action) {
    switch (action.type) {
      case constants.REQUEST_CURRENT_USER:
        return state;
        // return update(state, {
        //   currentUser: { $set: SessionUtils.getCurrentUser() }
        // });
      default:
        return state;
    }
  }
}

export default new UserReducer();
