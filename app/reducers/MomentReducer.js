import { MOMENT_ACTIONS } from '../constants';
import SessionUtils from '../utils/SessionStorage';
import update from 'react-addons-update';

export const momentData = (state = [], action) => {
  switch (action.type) {
    case MOMENT_ACTIONS.likeSuccess:
      console.log('moment response: ', action.payload.data);
      return update(state, {
        currentUser: { $set: SessionUtils.getCurrentUser() }
      });
    default:
      return state;
  }
}
