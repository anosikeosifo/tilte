import { API_BASE_URL } from './constants';


export const fetchConfigAPI = () => {
  return fetch(`${ API_BASE_URL }`)
          .then(response => response.json());
}
