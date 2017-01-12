import { MOMENT_ACTIONS } from '../constants';
import { likeMomentAPI } from '../api/MomentAPI';


const momentActionSuccess = (actionType, payload) => ({
  type: MOMENT_ACTIONS[`${actionType}Success`], success: true, payload 
});

const momentActionError = (actionType, error) => ({
  type: MOMENT_ACTIONS[`${actionType}Error`], success: false, error 
});

const triggerlikeMoment = () => ({
  type: MOMENT_ACTIONS.likeRequest
});

export const buildPostFormData = (jsonParams) => {
  const form_data = new FormData();
  form_data.append('data', jsonParams);
  return form_data;
}

export const likeMoment = (momentId, actorId) => {
  const actionType = 'like';
  const requestData = buildPostFormData(JSON.stringify({ 
    moment_id: momentId, user_id: actorId 
  }));
  

  return (dispatch) =>  {
    triggerlikeMoment();

    likeMomentAPI(requestData)
      .then(payload => dispatch(momentActionSuccess(actionType, payload)))
      .catch(error => dispatch(momentActionError(actionType, error)));
  }
};