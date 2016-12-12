import constants from '../constants';
import 'whatwg-fetch';

export default class SearchAPI {
  //TODO:: use the api endponts instead of raw strings
  static fetchSuggestions(searchText) {
    return fetch('http://localhost:3000/api/posts')
    .then(response => response.json());
  }
}
