import { CORE_ACTIONS, OAUTH_ACTIONS, BANNER_TOGGLE_NEXT, BANNER_TOGGLE_PREV, ASSETS_BASE_URL, USER_AVATAR_PLACEHOLDER } from './constants';
import update from 'immutability-helper';

const initialState = {
  appDetails: {
    name: 'Borderless',
    logo: `${ ASSETS_BASE_URL }/images/logo.png`,
  },
  currentUser: null,
  currentModal: null,
}

export const configData = (state = initialState, action) => {
  switch (action.type) {
    case CORE_ACTIONS.updateCurrentModal:
      return update(state, {
        currentModal: { $set: action.payload }
      });
    default:
      return state;
  }
}
