import { FEED_ACTIONS, EVENT_ACTIONS } from '../constants';
import update from 'immutability-helper';


export const initialState = [];
let currentState;

export const feedData = (state=initialState, action) => {
  currentState = state;

  switch (action.type) {
    case FEED_ACTIONS.fetchFeedSuccess:
      return action.payload.data;

    case FEED_ACTIONS.fetchFeedError:
      return "";

    case EVENT_ACTIONS.likeSuccess:
      return likeEvent(action);
    default:
      return currentState;
  }
};

const getEvent = (id) => {
  return currentState.find((event) => event.id == id);
};

const getEventIndex = (eventId) => {
  return currentState.findIndex((event) => event.id == eventId);
};

const likeEvent = (action) => {
  const eventIndex = getEventIndex(action.payload.data.id);
  return update(currentState, {
    [eventIndex]: { $set:  action.payload.data }
  });
};

const fetchEventDetails = (action) => {
  
};