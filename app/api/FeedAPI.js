import { API_BASE_URL } from '../constants';
import 'whatwg-fetch';


export const fetchUserFeed = (requestData) => {
  return fetch(`${ API_BASE_URL }/users/feed`, {
    method: 'POST',
    body: requestData,
    credentials: 'same-origin',
  })
  .then(response => response.json());
}

export const fetchWelcomeFeed = (userLocation, pageNumber) => {
  return fetch(`${ API_BASE_URL }/posts`)
          .then(response => response.json());
}