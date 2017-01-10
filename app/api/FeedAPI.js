import { API_BASE_URL } from '../constants';
import 'whatwg-fetch';



export const fetchUserFeed = (userId, userLocation, pageNumber) => {
  if(!userId) return fetchWelcomeFeed(userLocation, pageNumber);

  return fetch(`${ API_BASE_URL }/posts`)
          .then(response => response.json());
}

export const fetchWelcomeFeed = (userLocation, pageNumber) => {
  return fetch(`${ API_BASE_URL }/posts`)
          .then(response => response.json());
}