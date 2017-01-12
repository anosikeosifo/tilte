import { API_BASE_URL } from '../constants';
import 'whatwg-fetch';


export const fetchSuggestions = (searchText) => {
  //TODO:: Make request to elastic search endpoint.
  return fetch(`${ API_BASE_URL }/posts`)
          .then(response => response.json());
}