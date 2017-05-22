import { CONFIG_ACTIONS } from '../constants';
import { fetchConfigAPI } from '../api/ConfigAPI';

const configActionSuccess = (actionType, payload) => ({
  type: CONFIG_ACTIONS[`${actionType}Success`], success: true, payload
});

const configActionError = (actionType, error) => ({
  type: CONFIG_ACTIONS[`${actionType}Error`], success: false, error
});

export const updateCategoryPreference = () => ({
  type: UPDATE_CATEGORY_CONFIG,
});

const triggerFetchConfig = () => ({
  type: CONFIG_ACTIONS.fetchConfigRequest
});

export const fetchConfigData = () => {
  const actionType = 'fetchConfig';

  return (dispatch) => {
    triggerFetchConfig();

    fetchConfigAPI()
      .then(payload => dispatch(configActionSuccess(actionType, payload)))
      .catch(error => dispatch(configActionError(actionType, error)));
  }
};

export const setActiveModal = (modalName) => {
  return (dispatch) => dispatch({
    type: CONFIG_ACTIONS.updateCurrentModal,
    success: true,
    payload: modalName
  });
};
