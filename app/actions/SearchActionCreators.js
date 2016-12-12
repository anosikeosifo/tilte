import constants from '../constants';
import SearchAPI from '../api/SearchAPI';

export default class SearchActionCreators {
  static fetchSuggestions(text) {
    return (dispatch) => {
      dispatch({ type: constants.FETCH_SEARCH_SUGGESTIONS });
      SearchAPI.fetchSuggestions(text).then(
        (results) => dispatch({ type: constants.RECEIVE_SEARCH_SUGGESTIONS, success: true, payload: results }),
        (error) => dispatch({ type: constants.RECEIVE_SEARCH_SUGGESTIONS, success: false, error })
      );
    }
  }
}
