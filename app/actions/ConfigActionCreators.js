import constants from '../constants';
import ConfigAPI from '../api/ConfigAPI';


export const updateCategoryPreference = () => ({ 
  type: constants.UPDATE_CATEGORY_CONFIG,
});

const requestConfigData = () => ({
  type: constants.FETCH_CONFIG_DATA,
});

const fetchConfigDataSuccess = (payload) => ({
  type: constants.RECEIVE_CONFIG_DATA_SUCCESS, payload 
});

const fetchConfigDataError = (error) => ({
  type: constants.RECEIVE_CONFIG_DATA_ERROR, error 
});

export const fetchConfigData = () => {
  return (dispatch) => {
    requestConfigData();
    
    ConfigAPI.fetchConfig()
      .then(fetchConfigDataSuccess)
      .catch(fetchConfigDataError);
  }
};
