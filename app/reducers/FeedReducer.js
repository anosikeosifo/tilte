import { FEED_ACTIONS } from '../constants';

export const feedData = (state =[], action) => {
  switch (action.type) {
    case FEED_ACTIONS.fetchSuccess:
      return action.payload.data;
    case FEED_ACTIONS.fetchError:
      return console.log('an error occurred: ', action.error);
    default:
      return state;
  }
}