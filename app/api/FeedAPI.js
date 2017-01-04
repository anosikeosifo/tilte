import constants from '../constants';
import 'whatwg-fetch';

export default class FeedAPI {
  //TODO:: use the api endponts instead of raw strings
  static fetchUserFeed(userId, userLocation, pageNumber) {
    if(!userId) return this.fetchWelcomeFeed(userLocation, pageNumber);

    console.log('about to fetch user feed');
    return fetch(`${ constants.API_BASE_URL }/posts`)
    .then(response => response.json());
  }

  static fetchWelcomeFeed(userLocation, pageNumber) {
    console.log('about to fetch welcome feed');
    return fetch(`${ constants.API_BASE_URL }/posts`)
    .then(response => response.json());
  }
}
