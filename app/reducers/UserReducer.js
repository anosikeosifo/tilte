import { REQUEST_CURRENT_USER } from '../constants';
import SessionUtils from '../utils/SessionStorage';
import update from 'react-addons-update';

export const userData = (state = [], action) => {
  switch (action.type) {
    case REQUEST_CURRENT_USER:
      return state;
      // return update(state, {
      //   currentUser: { $set: SessionUtils.getCurrentUser() }
      // });
    default:
      return state;
  }
}