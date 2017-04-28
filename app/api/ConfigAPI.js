import { API_BASE_URL } from '../constants';


export const fetchConfig = () => {
  return fetch(`${ API_BASE_URL }/events`)
          .then(response => response.json());
}
