import { API_BASE_URL } from '../constants';
import { makePostRequest, makeGetRequest } from '../helpers/HttpHelper';

export const fetchEventDetailsAPI = (requestData) => {
  return makePostRequest(`${ API_BASE_URL }/events/show`, requestData);
};

export const fetchCommentsAPI = (requestData) => {
  return fetch(`${ API_BASE_URL }/events/${ requestData.event_id }/comments?page=${requestData.page}`, {
    method: 'GET',
    credentials: 'same-origin',
  })
  .then(response => response.json());
};

export const loadMapAPI = (requestData) => {
  // return fetch(`${ API_BASE_URL }/comments`, {
  //   method: 'POST',
  //   body: requestData,
  //   credentials: 'same-origin',
  // })
  // .then(response => response.json());

  return Promise.resolve({success: true, data: 'Maps not yet implementated'})
};

export const eventRegistrationAPI = (requestData) => {
  return makePostRequest(`${ API_BASE_URL }/events/register`, requestData);
};

export const saveEventAPI = (requestParams) => {
  return Promise.resolve({success: true, data: 'Event creation not yet implementated'});
};

export const fetchTrendingEventsAPI = () => {
return Promise.resolve({success: true, data: 'trending events has not been implementated'});
};

export const fetchFeaturedEventsAPI = (requestData) => {
  return makePostRequest(`${ API_BASE_URL }/events/featured`, requestData);
};
