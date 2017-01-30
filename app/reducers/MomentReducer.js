import { MOMENT_ACTIONS } from '../constants';
import update from 'immutability-helper';

export const momentData = (state=null, action) => {
  switch (action.type) {
    case MOMENT_ACTIONS.fetchDetailsSuccess:
      return fetchMomentDetails(action);

    default:
      return state;
  }
}

const fetchMomentDetails = (action) => (action.payload.data);
