import constants from '../constants';

export default class ConfigApi {
  //TODO:: use the api endponts instead of raw strings
  static fetchConfig() {
    return fetch('https://aircheapapi.pro-react.com/airports')
      .then(response => response.json());
  }
}
