import { API_BASE_URL } from '../constants';


export const likeMomentAPI = (requestData) => {
  return fetch(`${ API_BASE_URL }/posts/favorite`, {
    method: 'POST',
    body: requestData,
    credentials: 'same-origin',
  })
  .then(response => response.json());
};

export const fetchMomentAPI = (requestData) => {
  return fetch(`${ API_BASE_URL }/posts/${ requestData }`, {
    method: 'GET',
    credentials: 'same-origin',
  })
  .then(response => response.json());
};

export const fetchCommentsAPI = (requestData) => {
  return fetch(`${ API_BASE_URL }/comments/${ requestData }`, {
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
