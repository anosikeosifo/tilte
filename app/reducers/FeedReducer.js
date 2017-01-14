import { FEED_ACTIONS, MOMENT_ACTIONS } from '../constants';
import update from 'react-addons-update';


let feedState = null;

export const feedData = (state =[], action) => {
  feedState = state
  switch (action.type) {
    case FEED_ACTIONS.fetchSuccess:
      return action.payload.data;

    case FEED_ACTIONS.fetchError:
      return "";

    case MOMENT_ACTIONS.likeSuccess:
      return updateMoment(action);

    default:
      return state;
  }
};


const getMoment = (id) => {
  return state.find((moment) => moment.id == id);
};

const getMomentIndex = (momentId) => {
  return feedState.findIndex((moment) => moment.id == momentId);
};

const updateMoment = (action) => {
  const momentIndex = getMomentIndex(action.payload.data.id);

  return update(feedState, {
    [momentIndex]: { $set: action.payload.data }
  });
};