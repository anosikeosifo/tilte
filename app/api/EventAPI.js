import { API_BASE_URL } from '../constants';

export const fetchEventDetailsAPI = (requestData) => {
  return fetch(`${ API_BASE_URL }/events/${ requestData }`, {
    method: 'GET',
    credentials: 'same-origin',
  })
  .then(response => response.json());
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
  return Promise.resolve({success: true, data: 'Registration not yet implementated'});
};

export const saveEventAPI = (requestData) => {
  return Promise.resolve({success: true, data: 'Saving events has not been implementated'});
};

export const fetchTrendingEventsAPI = () => {
return Promise.resolve({success: true, data: 'trending events has not been implementated'});
};

export const fetchFeaturedEventsAPI = () => {
  return fetch(`${ API_BASE_URL }/event_categories/home`, {
    method: 'GET',
    credentials: 'same-origin',
  })
  .then(response => response.json());
};
