import { MOMENT_ACTIONS } from '../constants';
import SessionUtils from '../utils/SessionStorage';
import update from 'react-addons-update';

class MomentReducer {
  moment(state = [], action) {
    console.log('momentreducer state: ', state);
    switch (action.type) {
      case MOMENT_ACTIONS.likeSuccess:
        return update(state, {
          currentUser: { $set: SessionUtils.getCurrentUser() }
        });
      default:
        return state;
    }
  }
}

export default new MomentReducer();
