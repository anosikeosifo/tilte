import { CORE_ACTIONS } from './constants';
import { fetchConfigAPI } from './CoreAPI';

const configActionSuccess = (actionType, payload) => ({
  type: CORE_ACTIONS[`${actionType}Success`], success: true, payload
});

const configActionError = (actionType, error) => ({
  type: CORE_ACTIONS[`${actionType}Error`], success: false, error
});

export const updateCategoryPreference = () => ({
  type: UPDATE_CATEGORY_CONFIG,
});

const triggerFetchConfig = () => ({
  type: CORE_ACTIONS.fetchConfigRequest
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
    type: CORE_ACTIONS.updateCurrentModal,
    success: true,
    payload: modalName || null,
  });
};
