import { FEED_ACTIONS, MOMENT_ACTIONS } from '../constants';
import update from 'react-addons-update';


export const initialState = [];
let currentState;

export const feedData = (state=initialState, action) => {
  currentState = state;

  switch (action.type) {
    case FEED_ACTIONS.fetchFeedSuccess:
      return action.payload.data;

    case FEED_ACTIONS.fetchFeedError:
      return "";

    case MOMENT_ACTIONS.likeSuccess:
      return likeMoment(action);

    default:
      return currentState;
  }
};

const getMoment = (id) => {
  return currentState.find((moment) => moment.id == id);
};

const getMomentIndex = (momentId) => {
  return currentState.findIndex((moment) => moment.id == momentId);
};

const likeMoment = (action) => {
  const momentIndex = getMomentIndex(action.payload.data.id);
  return update(currentState, {
    [momentIndex]: { $set:  action.payload.data }
  });
};