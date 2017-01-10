import { UPDATE_CATEGORY_CONFIG, FETCH_CONFIG_DATA, FETCH_CONFIG_DATA_SUCCESS, FETCH_CONFIG_DATA_ERROR } from '../constants';
import { fetchConfig } from '../api/ConfigAPI';


export const updateCategoryPreference = () => ({ 
  type: UPDATE_CATEGORY_CONFIG,
});

const requestConfigData = () => ({
  type: FETCH_CONFIG_DATA,
});

const fetchConfigDataSuccess = (payload) => ({
  type: FETCH_CONFIG_DATA_SUCCESS, payload 
});

const fetchConfigDataError = (error) => ({
  type: FETCH_CONFIG_DATA_ERROR, error 
});

export const fetchConfigData = () => {
  return (dispatch) => {
    requestConfigData();
    
    fetchConfig()
      .then(dispatch(fetchConfigDataSuccess))
      .catch(dispatch(fetchConfigDataError));
  }
};
