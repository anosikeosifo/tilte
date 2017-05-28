import { API_BASE_URL } from '../core/constants';

export const likeMomentAPI = (requestData) => {
  return fetch(`${ API_BASE_URL }/posts/favorite`, {
    method: 'POST',
    body: requestData,
    credentials: 'same-origin',
  })
  .then(response => response.json());
};

export const fetchMomentsAPI = (requestData) => {
  return fetch(`${ API_BASE_URL }/posts/${ requestData }`, {
    method: 'GET',
    credentials: 'same-origin',
  })
  .then(response => response.json());
};

export const fetchCommentsAPI = (requestData) => {
  return fetch(`${ API_BASE_URL }/posts/${ requestData.moment_id }/comments?page=${requestData.page}`, {
    method: 'GET',
    credentials: 'same-origin',
  })
  .then(response => response.json());
};

export const postCommentAPI = (requestData) => {
  return fetch(`${ API_BASE_URL }/comments`, {
    method: 'POST',
    body: requestData,
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

export const momentRegistrationAPI = (requestData) => {
  return Promise.resolve({success: true, data: 'Registration not yet implementated'});
};

export const saveMomentAPI = (requestData) => {
  return Promise.resolve({success: true, data: 'Saving moments has not been implementated'});
};

export const fetchTopMomentsAPI = () => {
  return Promise.resolve({success: true, data: 'Saving moments has not been implementated'});
};
