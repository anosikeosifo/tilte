import constants from '../constants';
import { fetchSuggestions } from '../api/SearchAPI';

const requestSuggestions = () => ({
  type: constants.FETCH_SEARCH_SUGGESTIONS,
});

const loadSuggestionsSuccess = (payload) => ({
   type: constants.RECEIVE_SEARCH_SUGGESTIONS_SUCCESS, success: true, payload,
});

const loadSuggestionsError = (error) => ({
  type: constants.RECEIVE_SEARCH_SUGGESTIONS_ERROR, success: false, error,
});

export const loadSuggestions = () => {
  return (dispatch) => {
    requestSuggestions();

    fetchSuggestions(text)
      .then(dispatch(loadSuggestionsSuccess))
      .catch(dispatch(loadSuggestionsError));
  }
};
