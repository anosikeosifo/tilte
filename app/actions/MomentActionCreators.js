import { MOMENT_ACTIONS } from '../constants';
import { likeMomentAPI, fetchMomentAPI } from '../api/MomentAPI';
import { buildRequestParams } from '../helpers/HttpHelper';


const momentActionSuccess = (actionType, payload) => ({
  type: MOMENT_ACTIONS[`${actionType}Success`], success: true, payload 
});

const momentActionError = (actionType, error) => ({
  type: MOMENT_ACTIONS[`${actionType}Error`], success: false, error 
});

const triggerlikeMoment = () => ({
  type: MOMENT_ACTIONS.likeRequest
});

export const likeMoment = (momentId, actorId) => {
  const actionType = 'like';

  const requestData = buildRequestParams({ 
    moment_id: momentId, user_id: actorId 
  });
  
  return (dispatch) =>  {
    triggerlikeMoment();

    likeMomentAPI(requestData)
      .then(payload => dispatch(momentActionSuccess(actionType, payload)))
      .catch(error => dispatch(momentActionError(actionType, error)));
  }
};

const triggerFetchMomentDetails = (dispatch) => ({
  type: MOMENT_ACTIONS.fetchDetails
});

export const fetchMomentDetails = (dispatch) => {
  const actionType = 'fetchDetails';

  const requestData = buildRequestParams({ 
    moment_id: momentId, user_id: actorId 
  });
  
  return (dispatch) =>  {
    triggerFetchMomentDetails();

    fetchMomentAPI(requestData)
      .then(payload => dispatch(momentActionSuccess(actionType, payload)))
      .catch(error => dispatch(momentActionError(actionType, error)));
  }
};