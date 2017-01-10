import constants from '../constants';
import SearchAPI from '../api/SearchAPI';

const requestSuggestions = () => ({
  type: constants.FETCH_SEARCH_SUGGESTIONS,
});

const fetchSuggestionsSuccess = (payload) => ({
   type: constants.RECEIVE_SEARCH_SUGGESTIONS_SUCCESS, success: true, payload,
});

const fetchSuggestionsError = (error) => ({
  type: constants.RECEIVE_SEARCH_SUGGESTIONS_ERROR, success: false, error,
});

export const fetchSuggestions = () => {
  return (dispatch) => {
    requestSuggestions();

    SearchAPI.fetchSuggestions(text)
      .then(fetchSuggestionsSuccess)
      .catch(fetchSuggestionsError);
  }
};
