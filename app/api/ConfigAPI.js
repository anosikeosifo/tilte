import { API_BASE_URL } from '../constants';



export const fetchConfig = () => {
  return fetch(`${ API_BASE_URL }/posts`)
          .then(response => response.json());
}
