import constants from '../constants';

export const getCurrentUser = () => {
  return {
    type: constants.REQUEST_CURRENT_USER
  };
}
